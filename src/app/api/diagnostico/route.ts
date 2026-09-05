import { NextResponse } from 'next/server';
import { EmpresaData, RespuestaSocratica } from '@/lib/types';
import { calcularEbitdaLeak } from '@/lib/ebitdaEngine';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { empresa, respuestas } = body as { empresa: EmpresaData; respuestas: RespuestaSocratica[] };

    if (!empresa || !respuestas) {
      return NextResponse.json({ error: 'Faltan datos de empresa o respuestas' }, { status: 400 });
    }

    // 1. Ejecutar el motor de EBITDA
    const resultado = calcularEbitdaLeak(empresa, respuestas);

    // 2. Intentar análisis con Gemini
    const geminiApiKey = process.env.GEMINI_API_KEY;
    
    if (geminiApiKey) {
      try {
        const prompt = `Actúa como un Consultor Estratégico Senior de "Siren MG". Analiza la siguiente empresa chilena y sus resultados de madurez operativa:
        Empresa: ${empresa.razonSocial}
        Rubro: ${empresa.rubro}
        Fuga de EBITDA estimada: ${resultado.fugaTotal.toLocaleString('es-CL')} ${empresa.moneda}
        Nivel de Madurez: ${resultado.nivelMadurez.toFixed(1)}/5.0 (${resultado.nivelMadurezTexto})
        
        Áreas más críticas:
        ${resultado.fugaPorCategoria.filter(c => c.nivelCriticidad === 'Crítico' || c.nivelCriticidad === 'Medio').map(c => `- ${c.categoria}: Puntaje ${c.puntaje}/5`).join('\n')}

        Escribe un análisis cualitativo ejecutivo (máx 3 párrafos) dirigido al Gerente General. Utiliza un tono directo, estratégico y orientado a resultados, destacando la urgencia de cerrar estas brechas para recuperar el EBITDA perdido.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        });

        if (response.ok) {
          const geminiData = await response.json();
          const textResponse = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (textResponse) {
            resultado.analisisIA = textResponse;
          }
        } else {
          console.error('Error en API Gemini:', await response.text());
        }
      } catch (error) {
        console.error('Error llamando a Gemini:', error);
      }
    }

    // Fallback de análisis si Gemini falla o no hay API key
    if (!resultado.analisisIA) {
      resultado.analisisIA = `Estimado Gerente General de ${empresa.razonSocial}, el diagnóstico revela un nivel de madurez corporativa de ${resultado.nivelMadurez.toFixed(1)} sobre 5, lo que sitúa a la compañía en un estadio "${resultado.nivelMadurezTexto}". Esta situación está generando una fuga proyectada de EBITDA de aproximadamente ${resultado.fugaTotal.toLocaleString('es-CL')} ${empresa.moneda} anuales. Es imperativo abordar de inmediato las brechas operativas detectadas para capturar este valor oculto e iniciar un proceso de transformación hacia operaciones de excelencia.`;
    }

    return NextResponse.json(resultado);
  } catch (error) {
    console.error('Error en API diagnostico:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
