import { EmpresaData, RespuestaSocratica, ResultadoDiagnostico } from './types';
import { preguntasSocraticas } from './preguntas';

// Tasa de cambio fija para el MVP
const USD_TO_CLP = 950;

/**
 * Calcula la fuga de EBITDA proyectada y el nivel de madurez
 */
export function calcularEbitdaLeak(empresa: EmpresaData, respuestas: RespuestaSocratica[]): ResultadoDiagnostico {
  // 1. Determinar el factor de rubro
  let factorRubro = 0.08; // default "other"
  const rubroLower = empresa.rubro.toLowerCase();
  if (rubroLower.includes('contratista') || rubroLower.includes('minería') || rubroLower.includes('mineria')) {
    factorRubro = 0.15;
  } else if (rubroLower.includes('industrial') || rubroLower.includes('industria')) {
    factorRubro = 0.12;
  } else if (rubroLower.includes('servicio')) {
    factorRubro = 0.10;
  }

  // 2. Normalizar facturación a CLP para los cálculos (si se requiere, aunque la fuga se expresa en la misma moneda por defecto)
  const facturacionNormalizada = empresa.facturacionAnual;

  let fugaTotal = 0;
  let puntajePonderadoTotal = 0;
  let pesoTotal = 0;

  const fugaPorCategoria: { categoria: string; fuga: number; puntaje: number; nivelCriticidad: string }[] = [];

  // 3. Iterar sobre las respuestas y calcular fuga por categoría
  respuestas.forEach((respuesta) => {
    const preguntaDef = preguntasSocraticas.find(p => p.id === respuesta.preguntaId);
    if (!preguntaDef) return;

    // Fórmula: facturacion * pesoEbitda * ((5 - puntaje) / 5) * factorRubro
    const brecha = (5 - respuesta.puntaje) / 5;
    const fugaCategoria = facturacionNormalizada * preguntaDef.pesoEbitda * brecha * factorRubro;
    
    fugaTotal += fugaCategoria;
    puntajePonderadoTotal += respuesta.puntaje * preguntaDef.pesoEbitda;
    pesoTotal += preguntaDef.pesoEbitda;

    let nivelCriticidad = 'Bajo';
    if (respuesta.puntaje <= 2) nivelCriticidad = 'Crítico';
    else if (respuesta.puntaje <= 3) nivelCriticidad = 'Medio';

    fugaPorCategoria.push({
      categoria: preguntaDef.categoria,
      fuga: fugaCategoria,
      puntaje: respuesta.puntaje,
      nivelCriticidad
    });
  });

  // 4. Calcular nivel de madurez global
  // Si pesoTotal no es 1 por alguna razón, normalizamos
  const nivelMadurez = pesoTotal > 0 ? puntajePonderadoTotal / pesoTotal : 0;
  
  let nivelMadurezTexto = 'Inicial';
  if (nivelMadurez >= 4.5) nivelMadurezTexto = 'Clase Mundial';
  else if (nivelMadurez >= 3.5) nivelMadurezTexto = 'Avanzado';
  else if (nivelMadurez >= 2.5) nivelMadurezTexto = 'En Desarrollo';

  // 5. Generar proyectos estratégicos basados en las 3 áreas más críticas (menor puntaje)
  const areasCriticas = [...fugaPorCategoria].sort((a, b) => a.puntaje - b.puntaje).slice(0, 3);
  
  const proyectosEstrategicos = areasCriticas.map(area => {
    let titulo = `Optimización en ${area.categoria}`;
    let descripcion = `Implementación de mejores prácticas y controles de gestión para cerrar la brecha operativa en ${area.categoria.toLowerCase()}.`;
    let impacto = 'Alto';
    let plazo = 'Corto Plazo (3-6 meses)';

    if (area.categoria.includes('Gobernanza')) {
      titulo = 'Diseño de Gobierno Corporativo y OKRs';
      descripcion = 'Definición de roles C-Level, comités de dirección y tableros de control directivo.';
      plazo = 'Mediano Plazo (6-9 meses)';
    } else if (area.categoria.includes('Licitaciones')) {
      titulo = 'Reingeniería del Proceso de Pricing y Contratos';
      descripcion = 'Desarrollo de un modelo de costeo predictivo y control de cambios de alcance.';
    } else if (area.categoria.includes('Personas')) {
      titulo = 'Plan de Retención de Talento Crítico';
      descripcion = 'Mapeo de competencias clave, planes de sucesión y esquema de incentivos alineados al EBITDA.';
    } else if (area.categoria.includes('Operaciones')) {
      titulo = 'Control de Excelencia Operacional en Terreno';
      descripcion = 'Implementación de rutinas de supervisión y KPIs de productividad para evitar multas.';
    } else if (area.categoria.includes('Financiera')) {
      titulo = 'Implementación de Modelo de Gestión de Liquidez';
      descripcion = 'Desarrollo de proyecciones de flujo de caja a 12 meses y optimización de capital de trabajo.';
      plazo = 'Corto Plazo (3 meses)';
    } else if (area.categoria.includes('Comercialización')) {
      titulo = 'Estrategia de Diversificación de Ingresos';
      descripcion = 'Plan de expansión comercial (B2B) y fidelización para disminuir la concentración de cartera.';
      plazo = 'Largo Plazo (9-12 meses)';
    } else if (area.categoria.includes('Tecnología')) {
      titulo = 'Plan Director de Transformación Digital (ERP/BI)';
      descripcion = 'Levantamiento funcional y hoja de ruta para la unificación de datos y reportabilidad.';
      plazo = 'Largo Plazo (12-18 meses)';
    }

    return { titulo, descripcion, impacto, plazo };
  });

  return {
    empresa,
    respuestas,
    fugaTotal,
    fugaPorCategoria,
    nivelMadurez,
    nivelMadurezTexto,
    proyectosEstrategicos
  };
}
