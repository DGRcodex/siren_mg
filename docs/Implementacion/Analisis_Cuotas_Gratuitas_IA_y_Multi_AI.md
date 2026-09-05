# Siren MG: Análisis Comparativo de Cuotas Gratuitas de IAs y Arquitectura "Multi-AI" Costo $0

**Documento de Ingeniería y Optimización FinOps**  
**Fecha:** Septiembre 2026  
**Preparado por:** Daniel García Rojas (CTO, Sambalab)

---

## 1. ¿De qué cuenta sacar la API Key de Google?

Para el desarrollo del MVP y las primeras etapas comerciales:

1.  **Cuenta recomendada:** Usa tu cuenta de **Google de Sambalab** (o tu Gmail personal principal, ej. `dgrcodex@gmail.com`).
2.  **Dónde se obtiene:** En **[Google AI Studio](https://aistudio.google.com/app/apikey)** (no necesitas entrar a la consola engorrosa de Google Cloud).
3.  **Paso a paso (1 minuto):**
    *   Ingresa a [aistudio.google.com](https://aistudio.google.com/).
    *   Inicia sesión con tu correo de Google.
    *   Haz clic en el botón azul **"Get API key"** (o "Create API key").
    *   Selecciona *"Create API key in new project"* (o vincula un proyecto existente).
    *   Copia la clave que empieza con `AIzaSy...`.
    *   **Importante:** Google AI Studio **NO te pide tarjeta de crédito** para usar el Free Tier.

---

## 2. Comparativa Completa de Cuotas Gratuitas por Proveedor de IA

Podemos utilizar varias APIs de Inteligencia Artificial en paralelo dentro de Siren MG, aprovechando los *Free Tiers* de cada una para que el costo total de IA durante todo el desarrollo y las primeras 50 empresas sea **rigurosamente $0 CLP**.

| Proveedor | Modelos Disponibles Gratis | Límites del Free Tier | Velocidad / Latencia | Mejor Caso de Uso en Siren MG |
| :--- | :--- | :--- | :--- | :--- |
| **1. Google AI Studio (Gemini)** *(Principal)* | **Gemini 1.5 Flash**<br>Gemini 1.5 Pro | **15 peticiones/minuto (RPM)**<br>**1.500 peticiones/día (RPD)**<br>Ventana de 1M tokens | Muy Rápida (~1-2 seg) | **Motor Socrático Central**, diagnóstico en PDF y análisis financiero. |
| **2. Groq Cloud** *(El más rápido del mundo)* | **Llama 3.3 70B Versatile**<br>Llama 3.1 8B Instant<br>DeepSeek R1 Distill 70B<br>**Whisper Large v3 (Audio)** | **30 RPM / 14.400 RPD (8B)**<br>**30 RPM / 6.000 RPD (70B)**<br>2.000 transcr/día gratis | Ultrarrápida (300-800 tokens/seg) | **Fallback inmediato**, respuestas en tiempo real en la Web y **Transcripción de audios de directorio gratis**. |
| **3. GitHub Models** *(Microsoft / Azure)* | **GPT-4o**<br>**GPT-4o-mini**<br>Claude 3.5 Sonnet<br>Phi-4 | **150 llamadas/día (GPT-4o mini)**<br>50 llamadas/día (GPT-4o / Claude)<br>Requiere token de GitHub | Rápida | Generación de proyectos estratégicos Kaplan & Norton y validaciones complejas. |
| **4. OpenRouter** | **DeepSeek R1 (Free)**<br>Llama 3.3 70B (Free)<br>Gemini 2.0 Flash (Free) | **200 llamadas/día gratuitas** en modelos con etiqueta `:free` | Variable | Razonamiento lógico profundo de debilidades de directorio. |
| **5. Cohere** | **Command R+**<br>Embed Multilingual v3.0 | **1.000 llamadas al mes** (Trial Key gratuita) | Rápida | Búsqueda semántica en español para la biblioteca de actas. |
| **6. Cloudflare Workers AI** | Llama 3.1 8B<br>BGE Embeddings | **10.000 neuronas/día gratis** (~500 a 1.000 llamadas/día) | Edge Network global | Microservicios de clasificación de rubros. |
| **7. OpenAI / Anthropic Directo** | GPT-4o / Claude 3.5 | **Sin Free Tier permanente** (Solo pago por token) | Alta | No recomendado para el arranque a costo cero (usar vía GitHub Models o Gemini). |

---

## 3. Arquitectura "Multi-AI Router" con Fallback Automático (Costo $0)

Para blindar la plataforma y asegurar que nunca se caiga ni cobre un peso, implementaremos un patrón de diseño **Multi-AI Router**:

```
                              [ Cliente completa Cuestionario Socrático ]
                                                   │
                                                   ▼
                                     [ /api/diagnostico en Next.js ]
                                                   │
                        ┌──────────────────────────┴──────────────────────────┐
                        │                                                     │
                        ▼                                                     ▼
          [ PRIMARIO: Google Gemini 1.5 Flash ]                 [ FALLBACK: Groq Llama 3.3 70B ]
          * 1.500 llamadas/día gratis                           * 6.000 llamadas/día gratis
          * Contexto gigante + estilo analítico                 * Latencia sub-segundo instantánea
                        │                                                     │
                        │ (Si responde OK)                                    │ (Si Gemini da Error 429)
                        └──────────────────────────┬──────────────────────────┘
                                                   │
                                                   ▼
                                  [ Reporte Generado con Éxito ($0) ]
```

### Casos de Uso Especializados por IA:
1.  **Motor Socrático y Diagnóstico PDF:** **Google Gemini 1.5 Flash** (1.500 llamadas/día gratis).
2.  **Transcripción de Actas de Directorio y Voz:** **Groq Whisper Large v3** (Gratis, transcribe 1 hora de audio en 10 segundos).
3.  **Proyectos Kaplan & Norton y Segunda Opinión:** **GitHub Models (GPT-4o-mini)** (150 llamadas/día gratis).
4.  **Búsqueda Documental:** **Cohere Multilingual** (1.000 búsquedas/mes gratis).

---

## 4. Gobernanza Legal Transitoria: Operación con Sambalab SpA

Mientras se constituye la SpA definitiva de *Siren MG*:
1.  **Vehículo Jurídico Emisor:** Se utilizará temporalmente la **SpA de Sambalab** para emitir facturas exentas o afectas, recibir transferencias y contratar servicios.
2.  **Contabilidad Separada:** Se abrirá un centro de costos o cuenta contable dedicada a *Siren MG* dentro de Sambalab para asegurar total transparencia frente a Mauricio y Pedro.
3.  **Migración Futura:** Cuando la SpA de Siren esté lista, se traspasan los contratos, dominios y cuentas de desarrollador sin fricción.
