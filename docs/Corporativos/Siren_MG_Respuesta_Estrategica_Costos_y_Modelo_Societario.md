# Siren MG: Respuestas Estratégicas, Arquitectura Dual (Web + App Móvil), Inteligencia Artificial, Análisis de Costos (TCO) y Modelo Societario

**Documento Corporativo, Técnico y de Alineación de Negocio**  
**Fecha:** Septiembre 2026  
**Preparado por:** Daniel García Rojas (CTO & Arquitecto Principal, Sambalab / DGRcodex)  
**Destinatarios:** Mauricio Geldes Díaz (Siren MG), Pedro García Moretti (Director de Negocios y Operaciones, Sambalab)

---

## 1. Resumen Ejecutivo y Entendimiento Doctrinal

Hemos analizado exhaustivamente el **Manual Doctrinal SIREN MG (Versión 37)**, las propuestas previas de arquitectura y monetización, y las precisiones enviadas por Mauricio Geldes en su correo. El entendimiento del proyecto es total:

> **Tesis Central de Siren MG:** Transformar la consultoría tradicional de dirección estratégica (lenta, cara y basada en horas-hombre) en **Productized Consulting & SaaS de Gobernanza Estratégica**. El sistema democratiza el acceso a la Dirección Fraccional (C-Suite as a Service) para empresas industriales y contratistas mineras mediante:
> 1. Un **Lead Magnet Socrático Web (Prediagnóstico)** para captación masiva y cuantificación instantánea de la fuga de EBITDA en dinero real (CLP / USD).
> 2. Un **Diagnóstico Pagado** con roadmap de proyectos estratégicos de mitigación y flanco débil.
> 3. Un **Ecosistema Dual: Web Corporativa + App Móvil Nativa (iOS & Android)** con el *Cockpit 360* instalado en el teléfono del Gerente General para monitoreo continuo 24/7 y notificaciones push críticas.
> 4. Un **Cerebro de Inteligencia Artificial (AI Engine)** integrado en Google Cloud Platform (Vertex AI) que redacta análisis socráticos personalizados, gestiona el Radar de Entorno (Porter Dinámico) y automatiza actas de directorio.

---

## 2. Definición Arquitectónica: Ecosistema Dual Integrado (Web + App Móvil Nativa)

Para responder con contundencia a la duda de Mauricio sobre *"¿página web o app?"*, la respuesta técnica y comercial definitiva es que **Siren MG debe operar como un Ecosistema Dual Integrado**:

```
+-----------------------------------------------------------------------------------------------+
|                                      ECOSISTEMA SIREN MG                                      |
+-----------------------------------------------------------------------------------------------+
|                                                                                               |
|   1. PORTAL WEB CORPORATIVO (Siren Web Hub)          2. APP MÓVIL NATIVA (Siren Cockpit 360)  |
|   (Next.js 16 / React 19 / Responsive Desktop)       (iOS App Store + Android Google Play)    |
|   --------------------------------------------       ---------------------------------------  |
|   * Landing Page pública y posicionamiento SEO       * En el bolsillo del Gerente General 24/7|
|   * Prediagnóstico Express (Lead Magnet gratuito)    * Acceso Biométrico (FaceID / Huella)    |
|   * Diagnóstico Extendido (25 variables socráticas)  * Notificaciones Push de Alertas Críticas|
|   * Backoffice / CMS Administrativo para Mauricio    * Monitoreo de KPIs de EBITDA en faena   |
|   * Proyección en Pantallas de Directorio (HD)       * Modo Offline para faenas sin cobertura |
|                                                                                               |
+-----------------------------------------------+-----------------------------------------------+
                                                |
                                                v
+-----------------------------------------------------------------------------------------------+
|                             BACKEND UNIFICADO & CLOUD (GCP)                                   |
|   * API REST / Serverless: Python (FastAPI) en Google Cloud Run (Escalabilidad a cero)        |
|   * Base de Datos: PostgreSQL (Supabase / Cloud SQL) con Row-Level Security (RLS)             |
|   * Seguridad: Cifrado TLS 1.3 en tránsito + AES-256 en reposo (Grado Bancario/Minero)        |
|   * Facturación Automática: Integración DTE (Boleta/Factura Electrónica) + Pasarelas de Pago  |
+-----------------------------------------------+-----------------------------------------------+
                                                |
                                                v
+-----------------------------------------------------------------------------------------------+
|                       CEREBRO DE INTELIGENCIA ARTIFICIAL (Vertex AI & LLMs)                   |
|   * Gemini 1.5 Flash (Análisis Socrático en PDF)  * Claude 3.5 Sonnet (Proyectos Kaplan/Norton)|
|   * Gemini 1.5 Pro (Auditoría Balances/Memorias)  * OpenAI Whisper (Actas de Directorio en Voz)|
+-----------------------------------------------------------------------------------------------+
```

### Justificación de cada canal:
1.  **Portal Web (Siren Web Hub):**
    *   *Captación sin fricción:* El Gerente General no descargará una app de 80MB solo para cotizar. La web abre en 1 segundo desde LinkedIn, WhatsApp o correo.
    *   *Trabajo pesado de analistas y Directorio:* La revisión de matrices complejas, balances y actas se realiza en pantallas de escritorio.
2.  **App Móvil Nativa (Siren Cockpit 360 en iOS & Android):**
    *   *Status e "Inmunidad Informativa":* El GG tiene en su iPhone/Android su propio tablero de comando.
    *   *Alertas Push Inmediatas:* *"Alerta: Fuga detectada en Contrato Faena X por sobrecosto de HH"*.
    *   *Seguridad Biométrica (FaceID / Huella):* Para abrir los datos financieros ultra-sensibles sin escribir contraseñas.
    *   *Modo Offline:* Permite consultar los proyectos estratégicos durante vuelos o en el interior de faenas mineras sin cobertura.

---

## 3. Estrategia y Arquitectura de Inteligencia Artificial (AI APIs & Engines)

La IA en Siren MG no es un adorno cosmético: es el **multiplicador de valor** que permite ofrecer consultoría personalizada de alta gama a costo marginal cero.

```
[ Datos Cliente + Facturación + Respuestas Socráticas (0-5) ]
                              │
                              ▼
 ┌─────────────────────────────────────────────────────────────┐
 │               CEREBRO DE IA (Google Vertex AI)              │
 └─────────────────────────────────────────────────────────────┘
        │                     │                      │
        ▼                     ▼                      ▼
1. Motor Socrático      2. Proyectos K&N       3. Radar Macro
   (Diagnóstico PDF        (Planes con            (Alertas Push
    personalizado con       KPIs SMART y           Banco Central /
    voz de Mauricio)        metas a 90 días)       Aduanas / Cobre)
```

### A. Los 4 Módulos de Inteligencia Artificial de Siren MG

1.  **Módulo 1: Motor Socrático Generativo (Fase 1 - Prediagnóstico y Diagnóstico):**
    *   *Funcionamiento:* La API de IA recibe la facturación de la empresa, su rubro específico (ej. contratista de movimiento de tierra) y su puntaje en las 25 preguntas socráticas. El modelo genera **3 párrafos de diagnóstico cualitativo con la voz y doctrina de Mauricio Geldes**, explicando *por qué* ocurre la fuga de EBITDA y cómo mitigarlo.
2.  **Módulo 2: Generador de Proyectos Estratégicos Kaplan & Norton (Fase 2):**
    *   *Funcionamiento:* Transforma las debilidades detectadas en proyectos estructurados bajo las 4 perspectivas del Balanced Scorecard (Financiera, Clientes, Procesos Internos, Personas/Aprendizaje), con KPIs SMART, plazos y perfiles de cargo responsables.
3.  **Módulo 3: Radar de Entorno Dinámico (Fase 3 - Porter Dinámico con IA):**
    *   *Funcionamiento:* Scrapers en Python recopilan diariamente variaciones de commodities (Cobre, Molibdeno), inflación, UF y circulares de Aduanas. La IA sintetiza esta data en un **Boletín Ejecutivo Semanal** enviado como notificación push al teléfono del directivo.
4.  **Módulo 4: AI Secretary de Directorio y Búsqueda Semántica (Fase 3):**
    *   *Funcionamiento:* Transcripción de audios de reuniones gerenciales y de directorio (OpenAI Whisper) con extracción automática de actas, acuerdos, responsables y plazos de remediación de EBITDA.

### B. Matriz Comparativa de APIs de Inteligencia Artificial

| Proveedor / API | Rol en Siren MG | Ventajas Clave | Costo de Consumo |
| :--- | :--- | :--- | :--- |
| **Google Vertex AI (Gemini 1.5 Flash)** *(Principal)* | Motor Socrático, generación de PDFs y síntesis del Radar. | Ventana de contexto gigante (1M tokens), latencia ultrarrápida, corre dentro de GCP. | **~\$0.075 USD / millón de tokens** *(~$3 CLP por reporte generado)* |
| **Google Vertex AI (Gemini 1.5 Pro)** | Auditoría profunda de balances anuales, memorias y contratos. | Razonamiento financiero avanzado e ingesta de PDFs extensos. | **~\$1.25 USD / millón de tokens** |
| **Anthropic (Claude 3.5 Sonnet)** | Redacción de proyectos estratégicos y cartas a Directorios. | La mejor redacción y argumentación ejecutiva en español. | **~\$3.00 USD / millón de tokens** |
| **OpenAI (Whisper + Embeddings)** | Transcripción de audios de directorio y búsqueda en biblioteca documental. | Estándar de la industria en precisión de audio y búsqueda semántica. | **~\$0.006 USD / minuto de audio** |

### C. Privacidad y Blindaje Legal de Datos (Enterprise Grade)
*   **Contrato Enterprise en Vertex AI:** Google garantiza contractualmente que **ningún dato financiero, balance ni respuesta socrática de los clientes de Siren MG se utilizará jamás para entrenar modelos públicos**.
*   Cumplimiento de normativas ISO 27001, SOC2 Tipo II y cifrado de punta a punta.

---

## 4. Respuestas Detalladas y Recomendaciones al Correo de Mauricio (Puntos 1 al 13)

### Punto 1: Entregables (Fuga EBITDA + Proyectos Estratégicos)
*   **Prediagnóstico (Gratuito / Lead Magnet Web):** Arroja el monto total de Fuga Teórica de EBITDA (el "dolor"), nivel global de madurez (0 a 5) y 3 proyectos estratégicos prioritarios en formato ejecutivo (sin la receta quirúrgica). Su objetivo es gatillar la reunión de venta.
*   **Diagnóstico Completo (Pagado):** Desglose paramétrico de las 25 variables, análisis socrático con IA, matriz de impacto vs. esfuerzo y roadmap Kaplan & Norton detallado.
*   *Recomendación:* Exportación a PDF firmado con sello institucional Siren MG y semáforo visual de criticidad.

### Punto 2: Entrada de Datos y Manejo Multi-Moneda
*   **Canales:** Entrada rápida por Web; acceso recurrente al Cockpit mediante Web o App Móvil.
*   **Manejo de Moneda:** Selector explícito **CLP / USD** con sincronización automática de UF y Dólar Observado (API Banco Central / CMF).
*   **Escala Socrática (0 a 5):** Cada pregunta tendrá rúbrica explicativa visible en *Tooltips* interactivos para estandarizar las respuestas del directivo.

### Punto 3: Canales de Venta y Paquetes Comerciales
*   **3.1 Web Autónoma:** Autoservicio directo con pasarela de pago.
*   **3.2 B2B Directo:** Flujo comercial con cotización personalizada y agendamiento integrado (Calendly/HubSpot).
*   **3.3 Distribuidores Internacionales (Perú / México):** Sistema de **Partners / Tenants** con enlaces de afiliado parametrizados y liquidación de comisiones.
*   **Paquetes:**
    *   *Tier A (SaaS Autónomo):* Diagnóstico digital + Dashboard básico Web y App.
    *   *Tier B (+ Asesoría Virtual 30-60 min):* Diagnóstico + 1 sesión táctica vía videollamada.
    *   *Tier C (+ Workshop Presencial / Kickoff):* Diagnóstico + Jornada de alineación gerencial en oficinas del cliente.
    *   *Tier D (+ Retainer Directorio / C-Suite as a Service):* Cockpit 360 Full + 2 sesiones mensuales de acompañamiento a Directorio.

### Punto 4: Capacidad de Autoalimentación (Mejora Continua)
*   **Backoffice / CMS de Mauricio:** Panel administrativo para redactar nuevas preguntas, calibrar ponderadores de penalización de EBITDA y agregar nuevos proyectos estratégicos sin depender de programadores.

### Punto 5: Formato de Proyectos Estratégicos (Balanced Scorecard / Kaplan & Norton)
*   Plantilla digital que agrupa proyectos en las 4 perspectivas clásicas (Financiera, Clientes, Procesos Internos, Aprendizaje/Personas) potenciada con IA para generar KPIs personalizados.

### Punto 6: Sistema de Pago Online y Trazabilidad Financiera
*   **Chile:** Integración con **Webpay Plus (Transbank)** y **Fintoc / Khipu** (transferencias cuenta a cuenta con comisión ~1%).
*   **Internacional (Perú, México, Global):** **Stripe Billing** (cobro en USD con tarjetas internacionales y suscripciones recurrentes).
*   **Facturación:** Webhooks automáticos que emiten la Factura Electrónica (DTE) con APIs chilenas (SimpleFactura / LibreDTE).

### Punto 7: Radar de Entorno (Porter Dinámico y Macro con IA)
*   **Estrategia Freemium:** En Fase 1 se entrega un "Preview" del Radar (Cobre, UF, Dólar). El análisis cualitativo avanzado con IA y alertas de licitaciones queda reservado para la Fase 3.

### Punto 8: Fase 2 (Estructura de Flanco Débil y Tela de Araña de RRHH)
*   Entregable estructurado con diagnóstico de flanco débil y matriz de competencias de cargos clave, cobrado como *Setup Fee* o Consultoría de Profundización.

### Punto 9: Fase 3 (Cockpit 360 en Vivo / Gestión "En Video")
*   SaaS B2B en Web y App Móvil con seguimiento de fugas vs. presupuesto, repositorio de gobierno corporativo y asignación de compromisos con notificaciones push al teléfono.

### Punto 10: Piloto de Validación con Golden Omega (Miguel Ángel Peña)
*   Dossier de ciberseguridad, NDA corporativo pre-firmado y auditoría matemática de verificación cruzada entre los cálculos manuales y el motor en Python.

### Punto 11: Clientes Target y Fomento CORFO
*   Foco en Contratistas Mineros y PyMEs Industriales con postulación a instrumentos de subsidio CORFO (**SumaTuInnovación**, **Vouchers**) y beneficios tributarios bajo la **Ley I+D (Art. 35 bis)** (crédito tributario de hasta el 35%).

### Punto 12: Benchmarking Sectorial
*   Base de datos anonimizada para generar reportes comparativos de industria cuando se superen las 30-50 empresas por rubro.

### Punto 13: Identidad Corporativa y Rol Comercial
*   Diseño institucional de alta gama (Navy Blue / Dorado / Grafito), correos transaccionales `@sirenstrategy.com` y One-Pager comercial de alto impacto.

---

## 5. Análisis de Costo-Beneficio (TCO Cloud e IA)

### ¿Cómo se llama este documento formal?
*   **TCO (Total Cost of Ownership - Costo Total de Propiedad)**
*   **Business Case Tecnológico y Plan FinOps (Financial Operations)**

### Presupuesto Realista de Infraestructura, IA y Stores

#### Cuentas de Desarrollador para Apps Móviles (Costos Fijos):
*   **Apple Developer Program:** \$99 USD/año (iOS App Store).
*   **Google Play Console:** \$25 USD (pago único vitalicio).

#### Escenario 1: Fase Santiago de Chile / Tracción Inicial (Meses 1 a 6)
*Volumen estimado: 10 a 50 clientes activos, 500 prediagnósticos web mensuales.*
*   **Hosting Frontend Web (Vercel Pro):** \$20 USD/mes.
*   **Backend Motor Python (GCP Cloud Run):** \$0 a \$5 USD/mes.
*   **Base de Datos & Auth (Supabase PostgreSQL):** \$25 USD/mes.
*   **Notificaciones Push Móviles (Firebase Cloud Messaging):** \$0 (Gratuito).
*   **Consumo APIs de IA (Vertex AI / Gemini 1.5 Flash):** **\$10 a \$20 USD/mes.**
*   **Dominio y Correos Corporativos (Google Workspace):** \$14 USD/mes.
*   **Pasarelas de Pago:** Variable (~1% a 2.9% por transacción exitosa).
*   **TOTAL MENSUAL INFRAESTRUCTURA + IA:** **~\$70 a \$95 USD/mes (~$65.000 a $90.000 CLP/mes).**

#### Escenario 2: Expansión Latam & Global (Chile, Perú, México / Meses 6 a 18)
*Volumen estimado: 500 a 2.000 empresas, 10.000 diagnósticos/mes, multi-región.*
*   **Vercel Team Enterprise / Pro:** \$40 USD/mes.
*   **GCP Cloud Run Multi-Región:** \$50 a \$150 USD/mes.
*   **Base de Datos Dedicada (Supabase Scale / Cloud SQL):** \$100 a \$200 USD/mes.
*   **Consumo APIs de IA (Radar Masivo + Vertex AI + Whisper):** **\$100 a \$300 USD/mes.**
*   **Ciberseguridad y CDN (Cloudflare Enterprise):** \$50 USD/mes.
*   **TOTAL MENSUAL INFRAESTRUCTURA + IA ESCALA:** **~\$340 a \$740 USD/mes (~$330.000 a $700.000 CLP/mes).**

### Retorno sobre la Inversión (ROI):
*   Con **un solo cliente** contratando el Plan de Gobernanza o Dirección Fraccional (ej. 80 UF/mes = ~\$3.000.000 CLP/mes), se cubren **más de 3 años de costos operativos totales de infraestructura e IA**. El margen bruto del software supera el **90%**.

---

## 6. Cotización del Desarrollo Técnico (Web + App Móvil + Motor IA) y Tiempos

Si este proyecto integral se contratara a una Software Factory en Chile, la valorización de mercado de las horas de ingeniería de Daniel / Sambalab sería:

| Fase | Alcance Técnico | Plazo de Entrega | Valor de Mercado (Software Factory) |
| :--- | :--- | :--- | :--- |
| **Fase 1 (MVP)** | Web Landing Next.js + Motor Algorítmico Python (25 variables) + Generador PDF con IA Gemini + CMS de Preguntas + Pasarela de Pagos + Maqueta Base de App Móvil. | **5 a 7 semanas** | **\$15.000.000 a \$19.000.000 CLP** (USD \$16k - \$21k) |
| **Fase 2** | Entregables de remediación, Generador Kaplan & Norton con IA, Módulo RRHH / Competencias + Sincronización Web/Móvil. | **4 a 6 semanas** | **\$11.000.000 a \$15.000.000 CLP** (USD \$12k - \$16k) |
| **Fase 3** | App Móvil Nativa iOS & Android (*Cockpit 360* en stores con FaceID y Push) + Web Dashboard en vivo + Radar IA Vertex + AI Secretary de Directorio + Multi-tenant. | **8 a 12 semanas** | **\$26.000.000 a \$36.000.000 CLP** (USD \$28k - \$39k) |
| **TOTAL** | **Ecosistema Completo Llave en Mano (Web + App Stores + IA)** | **~5 a 6 meses** | **\$52.000.000 a \$70.000.000 CLP** (~USD \$56k - \$76k) |

---

## 7. Estructuración Societaria: ¿Cómo hacerlo si entras como SOCIO sin cobrar de inmediato?

Si Daniel / Sambalab entra como **Socio Tecnológico y Co-Founder (CTO)** aportando el desarrollo a cambio de participación accionaria y flujo futuro:

### A. Vehículo Legal y Contratos
*   Constitución de una **SpA (Sociedad por Acciones)** dedicada a *Siren MG / Siren Governance*.
*   Firma de un **Pacto de Accionistas (Shareholders Agreement)** ante notario.

### B. Mecanismo de Aporte: "Sweat Equity" y Vesting por Hitos
1.  **Sweat Equity (Capital por Trabajo):** El valor del desarrollo (tasado en los \$52M-\$70M CLP) se reconoce legalmente como el aporte tecnológico no dinerario de Sambalab/Daniel.
2.  **Vesting por Hitos Técnicos (Milestone-based Vesting):**
    *   *Hito 1 (Entrega Fase 1 MVP Web + Backend + Motor IA probado con Golden Omega):* Consolida el 40% de las acciones asignadas.
    *   *Hito 2 (Entrega Fase 2 con Generador Kaplan & Norton IA):* Consolida el 30%.
    *   *Hito 3 (Entrega Fase 3 con App publicada en App Store y Google Play):* Consolida el 30% restante (100% de la participación).

### C. Distribución Accionaria Recomendada
*   **Mauricio Geldes (Socio Fundador / Creador Doctrinal & Consultor Senior):** ~45% - 50%
*   **Daniel García Rojas / Sambalab (CTO & Co-Founder Tecnológico):** ~35% - 40%
*   **Pedro García / Sambalab (Director Comercial & Operaciones):** ~10% - 15%

### D. Modelo de Reparto de Ingresos (Cash Flow)
1.  **Ingresos por Consultoría Presencial de Mauricio:** Mauricio cobra un honorario preferente por su tiempo en terreno (ej. 70%), y el 30% restante queda en caja de la SpA.
2.  **Ingresos por Licencias SaaS (MRR Web y App):** El 100% ingresa a la SpA. Se define un **Fee de Mantenimiento Tecnológico recurrente para Sambalab/CTO (ej. 25% a 35% del MRR)** por actualización continua de las apps, servidores y consumo de IA, y el excedente se distribuye como **Dividendos trimestrales** entre los socios.

### E. Propiedad Intelectual (IP)
*   El código fuente, bases de datos y algoritmos quedan licenciados de forma exclusiva a la SpA, protegiendo a ambas partes.

---

## 8. Estrategia y Recomendaciones de Dominios

1.  🥇 **`sirenstrategy.com`** *(Altamente Recomendado)*: El más prestigioso para la plataforma web y endpoints de las apps móviles.
2.  🥈 **`sirengovernance.com`**: Fuerte posicionamiento en blindaje y directorios.
3.  🥉 **`sirenmg.com`** / **`sirenmg.cl`**: Para capturar la búsqueda de la marca de Mauricio en Chile.

---

## 9. Próximos Pasos Inmediatos

1.  **Aprobación del Documento:** Revisión final con Pedro.
2.  **Envío Oficial a Mauricio:** Enviar este documento consolidado como respuesta formal a su correo.
3.  **Sesión de Calibración Matemática e IA:** Reunión de 45 min para ajustar las fórmulas del manual y los *prompts* del motor socrático.
4.  **Demo Interactiva:** Presentar el flujo del prediagnóstico en Next.js y el prototipo visual del *Cockpit* móvil en Figma.
