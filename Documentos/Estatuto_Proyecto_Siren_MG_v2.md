# Siren MG: Propuesta de Arquitectura Técnica y Análisis Funcional (Versión 2.0)

**Documento de Entrega y Alineación de Producto**

**Fecha:** 27 de agosto de 2026  
**Preparado por:** Daniel García Rojas (CTO & Arquitecto Principal, Sambalab / DGRcodex)  
**Destinatarios:**
*   Mauricio Geldes Díaz (Siren MG)
*   Pedro García Moretti (Director de Negocios y Operaciones, Sambalab)

---

## 1. Resumen Ejecutivo Estratégico

Este documento formaliza la propuesta técnica y el plan de desarrollo de **Siren MG (Sistema Inteligente Relacional)**. Siren MG representa una disrupción en la consultoría de dirección estratégica tradicional; no vendemos reportes de escritorio, entregamos un "sistema de gobernanza y captura de EBITDA" para pequeñas y medianas empresas (PyMEs) industriales y B2B en Chile.

A través de un "Prediagnóstico Web" (nuestro Caballo de Troya comercial), el sistema calcula de forma instantánea pérdidas económicas invisibles (fugas de EBITDA) mediante una metodología socrática. Este reporte automatizado es el catalizador perfecto para que el Gerente General entienda su estado de "ceguera operativa" y adquiera nuestro servicio continuo de Dirección Estratégica Fraccional (C-Suite as a Service), gestionado a través de nuestro **Cockpit 360 móvil**.

## 2. Roles, Responsabilidades y Gobernanza del Ecosistema

El desarrollo y operación comercial de Siren MG cuenta con el soporte de Sambalab bajo los siguientes perfiles:

*   **Mauricio Geldes Díaz (Director Estratégico / Siren MG):** Creador y custodio del marco doctrinal. Define la lógica socrática, ponderaciones de algoritmos de fuga y coordinación con clientes piloto.
*   **Pedro García Moretti (Director de Negocios y Operaciones / Sambalab):** Soporte comercial estratégico. Diseño de flujos de monetización B2B y alineación de KPIs de mercado.
*   **Daniel García Rojas (CTO & Arquitecto Principal / Sambalab):** Diseño *end-to-end* de la infraestructura web, motor de cálculo en Python, seguridad de datos, y despliegue cloud en GCP.

## 3. Modelo Operativo y Flujo Funcional (El Embudo de Conversión)

El sistema digitaliza la lógica matemática preestablecida en el manual doctrinal, operando como un embudo de ventas altamente efectivo:

1.  **Atracción y Test (Lead Magnet):** El usuario (C-Level) ingresa al portal de prediagnóstico e indica su Facturación Anual.
2.  **Cuestionario Socrático:** El sistema somete al directivo a preguntas de diagnóstico de fricción (0 a 5) sobre áreas clave, evidenciando vulnerabilidades operacionales (RRHH, licitaciones, etc.).
3.  **Motor de Cálculo Automatizado:** Los algoritmos calculan la ineficiencia estructural, activando "factores de penalización" que se traducen en pesos chilenos reales perdidos (Fuga de EBITDA).
4.  **Generación de Resultados y Call-to-Action (CTA):** El motor renderiza en fracciones de segundo un reporte de impacto en formato PDF y lo despacha por correo. Este reporte actúa como gancho para cerrar una reunión táctica inmediata.
5.  **Despliegue del "Cockpit 360" (Retainer):** Una vez contratado el servicio, se despliega a la empresa un tablero SaaS en formato *Mobile-First*, dándole al CEO el "manubrio" de su organización en tiempo real.

## 4. Propuesta de Arquitectura de Software y Stack Tecnológico

Para garantizar una experiencia *Premium*, alta velocidad, SEO agresivo y escalabilidad corporativa, proponemos una arquitectura **Serverless** alojada íntegramente en **Google Cloud Platform (GCP)** y Vercel:

### A. Frontend (La Plataforma de Captación y el Cockpit Móvil)
*   **Stack:** Next.js 16 (App Router) y React 19 con TypeScript y Tailwind CSS.
*   **Enfoque PWA (Progressive Web App):** La aplicación está diseñada para ser instalada directamente en el teléfono del Gerente General, brindándole "inmunidad informativa" en el bolsillo, 24/7.
*   **Beneficios:** Tiempos de carga ultrarrápidos, indexación SEO automática para la *Landing Page*, y un diseño de vanguardia que transmite *Seniority* y confianza.

### B. Backend y Motor Algorítmico Financiero
*   **Stack:** Python (FastAPI) desplegado en **Google Cloud Run**.
*   **Beneficios:** Python es el estándar de oro para procesamiento de datos complejos financieros. Cloud Run permite escalar los recursos a cero cuando no hay tráfico, optimizando costos iniciales (OpEx) y escalando automáticamente ante picos de uso.

### C. Inteligencia Artificial (Radar de Entorno) y Base de Datos
*   **Base de Datos:** PostgreSQL (mediante Cloud SQL o Supabase) con Row Level Security (RLS) para segregación estricta de inquilinos (Tenants).
*   **Motor Socrático con IA (Vertex AI):** Integración con Google Vertex AI / Gemini para que, a mediano plazo, el "Radar de Entorno" cruce datos de Aduanas y Banco Central (Imacec, UF), procesando análisis cualitativos personalizados para el directivo.

### D. Seguridad Grado Corporativo (Privacidad Total)
*   El sistema solicitará datos sensibles (facturación, debilidades internas). Toda la data en reposo y en tránsito estará encriptada bajo estándares militares (TLS 1.3 / AES-256). Aseguraremos el estricto cumplimiento de políticas de privacidad para la tranquilidad de los directorios.

## 5. Estrategia de Lanzamiento, Tracción y Monetización

El modelo comercial de Siren MG se estructura en fases orientadas a rotación rápida y "Quick Wins":

*   **Fase 1 (Tracción Masiva y Validación):** Lanzamiento del prediagnóstico web **gratuito** para captar volumen de leads (MQL). Ejecución del primer piloto experimental con el contacto estratégico en **Golden Omega** para calibrar los algoritmos y la UX con *feedback* real en terreno.
*   **Fase 2 (Monetización del Acompañamiento):** Transición de los leads captados hacia el cierre de la consultoría de Dirección Fraccional (C-Suite). Integración de pasarelas (Stripe, Mercado Pago) para cobrar *setup fees* del Cockpit y asesorías puntuales de alto valor agregado.

## 6. Plan de Acción y Siguientes Pasos de Entrega para Hoy

Como CTO de Sambalab, el plan de ejecución técnico inmediato incluye:

1.  **Revisión Algorítmica con el Manual Doctrinal:** Ya hemos extraído la lógica de penalización y factores matemáticos del manual doctrinal de Mauricio Geldes para el motor de cálculo.
2.  **Configuración del Entorno Cloud (GCP/GitHub):** Inicializar los repositorios de Next.js y la API en Python dentro de la organización de GitHub de Sambalab.
3.  **Alineación Técnica:** Revisar conjuntamente este nuevo estatuto para validar que las "ideas más grandes" (PWA, Ciberseguridad e IA) hagan sentido con la estrategia de venta final al cliente.
4.  **Codiseño UI/UX:** Prototipado del flujo interactivo en Figma de la "Calculadora de Fugas".
