import { EmpresaData, RespuestaSocratica, ResultadoDiagnostico, Language } from './types';
import { getPreguntasSocraticas } from './preguntas';

// Tasa de cambio fija para el MVP
const USD_TO_CLP = 950;

/**
 * Calcula la fuga de EBITDA proyectada y el nivel de madurez
 */
export function calcularEbitdaLeak(empresa: EmpresaData, respuestas: RespuestaSocratica[], language: Language = 'es'): ResultadoDiagnostico {
  const preguntasSocraticas = getPreguntasSocraticas(language);
  
  // 1. Determinar el factor de rubro
  let factorRubro = 0.08; // default "other"
  const rubroLower = empresa.rubro.toLowerCase();
  if (rubroLower.includes('contratista') || rubroLower.includes('minería') || rubroLower.includes('mineria') || rubroLower.includes('mining') || rubroLower.includes('כרייה')) {
    factorRubro = 0.15;
  } else if (rubroLower.includes('industrial') || rubroLower.includes('industria') || rubroLower.includes('manufacturing') || rubroLower.includes('ייצור')) {
    factorRubro = 0.12;
  } else if (rubroLower.includes('servicio') || rubroLower.includes('services') || rubroLower.includes('שירותים')) {
    factorRubro = 0.10;
  }

  const facturacionNormalizada = empresa.facturacionAnual;

  let fugaTotal = 0;
  let puntajePonderadoTotal = 0;
  let pesoTotal = 0;

  const fugaPorCategoria: { categoria: string; fuga: number; puntaje: number; nivelCriticidad: string }[] = [];

  // 3. Iterar sobre las respuestas y calcular fuga por categoría
  respuestas.forEach((respuesta) => {
    const preguntaDef = preguntasSocraticas.find(p => p.id === respuesta.preguntaId);
    if (!preguntaDef) return;

    const brecha = (5 - respuesta.puntaje) / 5;
    const fugaCategoria = facturacionNormalizada * preguntaDef.pesoEbitda * brecha * factorRubro;
    
    fugaTotal += fugaCategoria;
    puntajePonderadoTotal += respuesta.puntaje * preguntaDef.pesoEbitda;
    pesoTotal += preguntaDef.pesoEbitda;

    let nivelCriticidad = 'Bajo';
    if (language === 'en') {
      nivelCriticidad = respuesta.puntaje <= 2 ? 'Critical' : respuesta.puntaje <= 3 ? 'Vulnerable' : 'Robust';
    } else if (language === 'he') {
      nivelCriticidad = respuesta.puntaje <= 2 ? 'קריטי' : respuesta.puntaje <= 3 ? 'פגיע' : 'איתן';
    } else {
      nivelCriticidad = respuesta.puntaje <= 2 ? 'Crítico' : respuesta.puntaje <= 3 ? 'Vulnerable' : 'Robusto';
    }

    fugaPorCategoria.push({
      categoria: preguntaDef.categoria,
      fuga: fugaCategoria,
      puntaje: respuesta.puntaje,
      nivelCriticidad
    });
  });

  const nivelMadurez = pesoTotal > 0 ? puntajePonderadoTotal / pesoTotal : 0;
  
  let nivelMadurezTexto = 'Inicial';
  if (language === 'en') {
    nivelMadurezTexto = nivelMadurez >= 4.5 ? 'World Class' : nivelMadurez >= 3.5 ? 'Advanced' : 'Developing';
  } else if (language === 'he') {
    nivelMadurezTexto = nivelMadurez >= 4.5 ? 'ברמה עולמית' : nivelMadurez >= 3.5 ? 'מתקדם' : 'בפיתוח';
  } else {
    nivelMadurezTexto = nivelMadurez >= 4.5 ? 'Clase Mundial' : nivelMadurez >= 3.5 ? 'Avanzado' : 'En Desarrollo';
  }

  // 5. Generar proyectos estratégicos basados en las 3 áreas más críticas
  const areasCriticas = [...fugaPorCategoria].sort((a, b) => a.puntaje - b.puntaje).slice(0, 3);
  
  const proyectosEstrategicos = areasCriticas.map(area => {
    let titulo = language === 'en' ? `Optimization in ${area.categoria}` : language === 'he' ? `אופטימיזציה ב ${area.categoria}` : `Optimización en ${area.categoria}`;
    let descripcion = language === 'en' ? 'Implementation of best practices to close the operational gap.' : language === 'he' ? 'יישום שיטות עבודה מומלצות לסגירת הפער התפעולי.' : 'Implementación de mejores prácticas para cerrar la brecha operativa.';
    let impacto = language === 'en' ? 'High' : language === 'he' ? 'גבוה' : 'Alto';
    let plazo = language === 'en' ? 'Short Term (3-6 mo)' : language === 'he' ? 'טווח קצר (3-6 חודשים)' : 'Corto Plazo (3-6 meses)';
    let kpiSugerido = language === 'en' ? 'Compliance Rate (%)' : language === 'he' ? 'שיעור עמידה ביעדים (%)' : 'Tasa de cumplimiento (%)';

    // Para mantenerlo dinámico e independiente del ID, mapearemos por index crudo para MVP o dejaremos genérico
    // Por simplicidad, ya tenemos el KPI asociado al área crítica (que está traducida)
    
    return { titulo, descripcion, impacto, plazo, kpiSugerido };
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
