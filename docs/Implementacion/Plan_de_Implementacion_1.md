# Siren MG: Plan de Implementación 1 (MVP Rápido)

**Documento de Ejecución Técnica**  
**Versión:** 1.0  
**Objetivo:** Construir y desplegar un MVP funcional del Prediagnóstico Socrático y Motor de Fuga de EBITDA en 24 a 72 horas, utilizando Next.js 16 y la capa gratuita de IA (Google Gemini 1.5 Flash).

---

## 🎯 Objetivo del MVP

Tener un enlace web público (`https://siren-app.vercel.app` o similar) donde Mauricio Geldes y Pedro García puedan:
1.  Ingresar datos de una empresa (Razón social, rubro, facturación en CLP o USD).
2.  Responder un cuestionario socrático interactivo (escala de 0 a 5).
3.  Ver en pantalla el cálculo matemático exacto de **Fuga de EBITDA** según el Manual Doctrinal v37.
4.  Leer un **análisis estratégico cualitativo redactado en tiempo real por IA (Gemini 1.5 Flash - Free Tier)** con la voz doctrinal de Siren MG.
5.  Descargar o visualizar el **Reporte Ejecutivo de Fuga de EBITDA**.

---

## 📋 Roadmap Paso a Paso para la Semana / Mañana

```
[ PASO 1: Setup & API Keys (Gemini Free) ]
                   │
                   ▼
[ PASO 2: Estructura del Cuestionario Socrático ]
                   │
                   ▼
[ PASO 3: Motor Matemático de Fuga de EBITDA ]
                   │
                   ▼
[ PASO 4: Integración Serverless de Gemini 1.5 Flash ]
                   │
                   ▼
[ PASO 5: Dashboard de Resultados (Cockpit Preview) ]
                   │
                   ▼
[ PASO 6: Generación de Reporte PDF / Vista Imprimible ]
                   │
                   ▼
[ PASO 7: Despliegue en Vercel (Producción) ]
```

---

### PASO 1: Setup y Configuración de la IA Gratuita (30 min)
*   **Obtener API Key de Google AI Studio:**
    *   Entrar a [Google AI Studio](https://aistudio.google.com/).
    *   Crear una API Key gratuita para **Gemini 1.5 Flash**.
    *   *Capacidad gratuita:* 15 peticiones por minuto (RPM), 1.500 llamadas al día y 1 millón de tokens de contexto. Costo: **\$0 CLP**.
*   **Configurar variables de entorno:**
    *   En `siren-app/.env.local`:
        ```env
        GEMINI_API_KEY=tu_api_key_aqui
        NEXT_PUBLIC_APP_URL=http://localhost:3000
        ```
*   **Instalar SDK oficial de Google Gen AI:**
    ```bash
    cd siren-app
    npm install @google/genai
    ```

---

### PASO 2: Diseño y Estructura del Cuestionario Socrático (1-2 horas)
*   **Definir las preguntas del Prediagnóstico Express:**
    *   Para el MVP no ponemos las 25 variables de golpe (para evitar que el usuario se fatigue); seleccionamos las **5 a 7 preguntas socráticas más críticas** del manual:
        1.  *Gobernanza y Roles C-Level* (0 a 5).
        2.  *Licitaciones y Control de Desvíos de Margen* (0 a 5).
        3.  *Gestión de Personas y Competencias Clave* (0 a 5).
        4.  *Control de Operaciones y Multas en Faena* (0 a 5).
        5.  *Planificación Financiera y Flujo de Caja* (0 a 5).
*   **Componente Interactivo de Pregunta (`QuestionCard.tsx`):**
    *   Slider o botones numéricos del 0 al 5.
    *   *Tooltip* explicativo de qué significa 0 (Caos total / Ceguera) y 5 (Gobernanza de clase mundial).

---

### PASO 3: Motor Matemático de Fuga de EBITDA (1 hora)
*   **Implementar la lógica del Manual Doctrinal v37 en TypeScript:**
    *   Crear `/src/lib/ebitdaEngine.ts`:
        *   Cálculo del EBITDA base estimado (% según rubro o input del cliente).
        *   Factor de penalización por cada punto bajo nivel 5 en la escala socrática.
        *   Fórmula: `Fuga_EBITDA = Facturación * Factor_Rubro * (1 - (Puntaje_Total / Puntaje_Maximo))`.
        *   Soporte para selector **CLP / USD** (conversión automática con tipo de cambio fijo para el MVP: \$950 CLP/USD).

---

### PASO 4: Integración del Cerebro de IA con Gemini 1.5 Flash (1 hora)
*   **Crear Endpoint API en Next.js (`/src/app/api/diagnostico/route.ts`):**
    *   Recibe: `{ empresa, facturacion, moneda, respuestas, rubro }`.
    *   Ejecuta el cálculo matemático con `ebitdaEngine.ts`.
    *   Envía el *System Prompt* doctrinal a Gemini 1.5 Flash:
        > *"Eres el motor de diagnóstico estratégico de Siren MG, basado en la doctrina de Mauricio Geldes. Con un tono de consultor senior para Directorios, analiza la siguiente empresa [RUBRO] con facturación de [MONTO]. Su fuga calculada es de [FUGA]. Genera: 1) Diagnóstico de ceguera operativa (2 párrafos), 2) 3 Proyectos estratégicos prioritarios estilo Kaplan & Norton, 3) Recomendación de blindaje al Gerente General."*
    *   Retorna JSON estructurado con el análisis cualitativo.

---

### PASO 5: Pantalla de Resultados — El Cockpit Preview (2 horas)
*   **Vista de Impacto en UI (`/src/app/resultado/page.tsx`):**
    *   **Hero Card:** Monto gigante de Fuga de EBITDA en rojo/dorado (*"Estás perdiendo \$340.000.000 CLP al año por fricción interna"*).
    *   **Semáforo de Madurez:** Indicador visual (Crítico, Vulnerable, Robusto).
    *   **Matriz de 3 Proyectos Estratégicos:** Generados dinámicamente por la IA con sus KPIs y plazos.
    *   **Call to Action (CTA):** Botón principal *"Agendar Sesión de Desbloqueo de 30 min con Mauricio Geldes"*.

---

### PASO 6: Generación de Reporte PDF / Vista de Impresión (1 hora)
*   **Estilos de Impresión (`@media print`):**
    *   Habilitar botón *"Descargar Reporte Ejecutivo en PDF"*.
    *   Renderiza la carátula con logos de Siren MG y Sambalab, el desglose de fuga y el análisis socrático de Gemini en formato carta/A4 listo para firmar.

---

### PASO 7: Despliegue en Producción (Vercel) (15 min)
*   **Deploy inmediato:**
    ```bash
    npx vercel --prod
    ```
*   Configurar `GEMINI_API_KEY` en el dashboard de Vercel.
*   Probar en vivo desde el celular y enviar el enlace al grupo de WhatsApp con Mauricio y Pedro.

---

## ⏱️ Estimación de Tiempo Total de Desarrollo del MVP

| Tarea | Tiempo Estimado |
| :--- | :--- |
| Paso 1: Setup y API Key Gemini | 30 min |
| Paso 2: UI Cuestionario Socrático | 90 min |
| Paso 3: Motor Matemático EBITDA | 45 min |
| Paso 4: Integración API Gemini | 60 min |
| Paso 5: Pantalla de Resultados Cockpit | 90 min |
| Paso 6: Exportación PDF / Print | 45 min |
| Paso 7: Deploy Vercel y Pruebas Móviles | 30 min |
| **TOTAL** | **~6.5 Horas de Desarrollo Concentrado** |
