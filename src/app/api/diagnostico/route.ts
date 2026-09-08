import { NextResponse } from 'next/server';
import { EmpresaData, RespuestaSocratica } from '@/lib/types';
import { calcularEbitdaLeak } from '@/lib/ebitdaEngine';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { empresa, respuestas, language = 'es' } = body as { empresa: EmpresaData; respuestas: RespuestaSocratica[]; language?: string };

    if (!empresa || !respuestas) {
      return NextResponse.json({ error: 'Faltan datos de empresa o respuestas' }, { status: 400 });
    }

    // 1. Ejecutar el motor de EBITDA
    const resultado = calcularEbitdaLeak(empresa, respuestas, language as any);

    // 2. Guardar el Lead en la Base de Datos (Supabase via Prisma)
    try {
      await prisma.diagnosticoLead.create({
        data: {
          razonSocial: empresa.razonSocial,
          rubro: empresa.rubro,
          facturacionAnual: empresa.facturacionAnual,
          moneda: empresa.moneda,
          nivelMadurez: resultado.nivelMadurez,
          fugaTotal: resultado.fugaTotal,
          idioma: language,
          respuestasJson: JSON.stringify(respuestas)
        }
      });
      console.log('Lead guardado exitosamente en BD.');
    } catch (dbError) {
      console.error('Error guardando en la Base de Datos (continuando con la respuesta):', dbError);
      // No frenamos la respuesta al cliente si falla la base de datos temporalmente
    }

    // 3. Intentar análisis con Gemini
    const geminiApiKey = process.env.GEMINI_API_KEY;
    
    if (geminiApiKey) {
      try {
        let languageInstruction = '';
        if (language === 'en') {
          languageInstruction = ' IMPORTANT: Write the entire analysis in ENGLISH.';
        } else if (language === 'he') {
          languageInstruction = ' IMPORTANT: Write the entire analysis in HEBREW.';
        } else {
          languageInstruction = ' IMPORTANT: Write the entire analysis in SPANISH.';
        }

        const prompt = `Actúa como un Consultor Estratégico Senior de "Siren MG". Analiza la siguiente empresa y sus resultados de madurez operativa:
        Empresa: ${empresa.razonSocial}
        Rubro: ${empresa.rubro}
        Fuga de EBITDA estimada: ${resultado.fugaTotal.toLocaleString('es-CL')} ${empresa.moneda}
        Nivel de Madurez: ${resultado.nivelMadurez.toFixed(1)}/5.0 (${resultado.nivelMadurezTexto})
        
        Áreas más críticas:
        ${resultado.fugaPorCategoria.filter(c => c.nivelCriticidad.match(/(Crítico|Critical|קריטי|Vulnerable|פגיע)/i)).map(c => `- ${c.categoria}: Puntaje ${c.puntaje}/5`).join('\n')}

        Escribe un análisis cualitativo ejecutivo (máx 3 párrafos) dirigido al Gerente General. Utiliza un tono directo, estratégico y orientado a resultados, destacando la urgencia de cerrar estas brechas para recuperar el EBITDA perdido.${languageInstruction}`;

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
      if (language === 'en') {
        resultado.analisisIA = `Dear CEO of ${empresa.razonSocial}, the diagnostic reveals a corporate maturity level of ${resultado.nivelMadurez.toFixed(1)} out of 5. This situation is generating a projected EBITDA leak of approximately ${resultado.fugaTotal.toLocaleString('en-US')} ${empresa.moneda} per year. It is imperative to immediately address the detected operational gaps.`;
      } else if (language === 'he') {
        resultado.analisisIA = `מנכ"ל יקר של ${empresa.razonSocial}, האבחון מגלה רמת בגרות תאגידית של ${resultado.nivelMadurez.toFixed(1)} מתוך 5. מצב זה מייצר דליפת EBITDA צפויה של כ-${resultado.fugaTotal.toLocaleString('he-IL')} ${empresa.moneda} בשנה. הכרחי לטפל באופן מיידי בפערים התפעוליים שהתגלו.`;
      } else {
        resultado.analisisIA = `Estimado Gerente General de ${empresa.razonSocial}, el diagnóstico revela un nivel de madurez corporativa de ${resultado.nivelMadurez.toFixed(1)} sobre 5, lo que sitúa a la compañía en un estadio "${resultado.nivelMadurezTexto}". Esta situación está generando una fuga proyectada de EBITDA de aproximadamente ${resultado.fugaTotal.toLocaleString('es-CL')} ${empresa.moneda} anuales. Es imperativo abordar de inmediato las brechas operativas detectadas para capturar este valor oculto e iniciar un proceso de transformación hacia operaciones de excelencia.`;
      }
    }

    return NextResponse.json(resultado);
  } catch (error) {
    console.error('Error en API diagnostico:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
