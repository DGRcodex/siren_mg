# Descripción Técnica de Funcionalidades (Siren MG)

Este documento detalla las capacidades operativas de la plataforma en su estado actual (Fase 1).

## 1. Prediagnóstico Socrático (Wizard)
- **Ruta:** `/diagnostico`
- **Descripción:** Formulario interactivo por pasos que levanta el perfil comercial del cliente y ejecuta 7 preguntas críticas de evaluación operativa.
- **Técnica:** Utiliza el estado local de React y persiste los datos en `sessionStorage`. Esto evita el abandono de la página al permitir que el usuario use el botón "Atrás" sin perder la información ya digitada.

## 2. Motor de Cálculo de Fuga (Ebitda Engine)
- **Ruta:** `src/lib/ebitdaEngine.ts`
- **Descripción:** Algoritmo propietario que calcula la pérdida monetaria basada en ineficiencias operativas.
- **Mecanismo:** 
  1. Asigna un peso (factor de riesgo) al rubro del cliente.
  2. Multiplica la facturación por el peso de la pregunta (Ej: Gobernanza = 0.20) y por la brecha de respuesta `(5 - puntaje) / 5`.
  3. Agrupa las áreas críticas y asigna metodologías de mitigación (BSC) con sus respectivos KPIs.

## 3. Síntesis mediante Inteligencia Artificial
- **Ruta:** `src/app/api/diagnostico/route.ts`
- **Descripción:** Generador de reportes ejecutivos automatizado.
- **Mecanismo:** El servidor captura el payload del diagnóstico (fuga total y áreas vulnerables) y ensambla un prompt estricto hacia Google Gemini. La IA redacta 3 párrafos de alto impacto para el Gerente General, ajustando el idioma dinámicamente según la preferencia del usuario.

## 4. Arquitectura Multi-idioma (i18n) y RTL
- **Componente:** `LanguageContext.tsx` y `dictionaries.ts`
- **Descripción:** Sistema de traducción en caliente sin recarga de página (Single Page Application).
- **Mecanismo:** A través de un React Context, la web inyecta los textos correspondientes. Si el idioma es Hebreo (`he`), el contexto inyecta el atributo `dir="rtl"` en la raíz del documento (HTML), lo que fuerza a Tailwind CSS a invertir márgenes, padding y flexbox para lectura de derecha a izquierda.

## 5. Captura y Persistencia de Leads (B2B CRM)
- **Componente:** Prisma ORM y PostgreSQL (Supabase).
- **Descripción:** Sistema de guardado seguro de prospectos comerciales.
- **Mecanismo:** Antes de que la API retorne el resultado al frontend, invoca a Prisma para guardar un registro en la tabla `DiagnosticoLead`. Se almacenan datos financieros y el JSON bruto de las respuestas, lo que permitirá auditorías o cruces de data (Business Intelligence) en el futuro.

## 6. Exportación Corporativa a PDF
- **Ruta:** `/resultado` (CSS `@media print`)
- **Descripción:** Adaptación de la web para impresión en formato físico o digital.
- **Mecanismo:** Mediante reglas CSS exclusivas de impresión (`print:hidden`, `print:text-black`, `print:break-inside-avoid`), se ocultan botones y sombras innecesarias, formateando el dashboard como un reporte formal que puede ser presentado directamente en una sesión de directorio.
