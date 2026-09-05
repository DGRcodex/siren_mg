# Siren MG: Propuesta Estratégica de Monetización y Modelos de Cobro

**Documento de Definición Comercial**

**Fecha:** 27 de agosto de 2026  
**Preparado por:** Sambalab / DGRcodex  
**Para:** Equipo Directivo Siren MG

---

## 1. Visión General: El Modelo Híbrido (Productized Consulting)

La monetización de Siren MG no debe operar como una consultoría tradicional basada en horas-hombre, ni como un software genérico. El modelo más rentable para este ecosistema es la **Consultoría Parametrizada (Productized Consulting)**, que combina un embudo de software automatizado (SaaS) con un cierre de consultoría de alto valor (High-Ticket). 

El objetivo es captar leads a costo cero a través de la WebApp, y monetizar agresivamente mediante **Suscripciones Recurrentes (MRR)** y **Retenedores de Dirección Fraccional**.

---

## 2. El Embudo Comercial y las 3 Vías de Monetización

La estrategia de ingresos se divide en 3 fases clave a lo largo del "Viaje del Cliente" (User Journey):

### Vía 1: El "Gancho" Gratuito y Captación de Leads (Fase de Atracción)
*   **El Producto:** La Landing Page pública con el "Test Express de 3 minutos".
*   **Precio:** **Gratis** (A cambio de los datos de contacto y facturación del CEO).
*   **Cómo monetiza indirectamente:** El usuario recibe un PDF automático que muestra su nivel de "Madurez Crítica" y el monto total de Fuga Teórica (ej. "Estás perdiendo 1.500 Millones"), pero **oculta el detalle de en qué procesos exactos está el problema**. 
*   **CTA (Call to Action):** Para ver el desglose, el sistema obliga al CEO a agendar una llamada obligatoria de 30 minutos con un Consultor Senior (Mauricio). Aquí es donde inicia la venta real.

### Vía 2: *Setup Fee* y Auditoría Express (Fase de Entrada)
*   **El Producto:** Si el cliente avanza tras la llamada, se le vende el "Diagnóstico de Fondo en Terreno" (Días 1 a 30) y la configuración inicial de la plataforma *Cockpit 360*.
*   **Modelo de Cobro:** **Fixed Fee (Cobro Fijo) / Setup Fee.**
*   **Lógica Comercial:** No se regala la configuración del software. El cliente paga un monto único por la auditoría de 25 variables, el mapeo de fugas reales y la parametrización de su cuenta en la WebApp de Siren MG.
*   *Ticket Promedio Sugerido:* Alto valor (Acorde a la magnitud de los $50M-$200M que menciona el manual para proyectos B2B).

### Vía 3: Retenedor Mensual + SaaS (Fase de Continuidad)
Aquí es donde reside el corazón financiero de Siren MG, asegurando **Ingresos Mensuales Recurrentes (MRR)**. Se ofrecen planes empaquetados:

*   **Licencia SaaS (Plataforma):** Un cobro base mensual (Ej. 15 a 30 UF/mes) exclusivamente por el uso del "Cockpit 360 en el teléfono", las alertas del Radar de Entorno (Aduanas/Imacec) impulsadas por IA, y las integraciones con su ERP.
*   **Dirección Fraccional (C-Suite as a Service):** Un *Retainer Mensual* de alto valor (Ej. 80 a 150 UF/mes) por el acompañamiento recurrente de Mauricio y el equipo. Esto incluye la Mesa Semanal del Triángulo Financiero, presencia en reuniones de directorio y auditoría de contratos.
*   **Success Fee (Upsell Opcional):** Un porcentaje mixto (Ej. 1% a 3%) calculado sobre el EBITDA extraordinario que se logre recuperar gracias a las intervenciones directas de Siren MG (como renegociación de licitaciones y multas de arranque evitadas).

---

## 3. Arquitectura de Planes y "Pricing"

Para facilitar la venta, se sugiere estructurar la propuesta final al cliente en 3 "Tiers" o niveles de servicio (aplicando el efecto anclaje de precios):

| Característica / Plan | 1. Plan "Radar" (Solo Software) | 2. Plan "Gobernanza" (SaaS + Consultoría) | 3. Plan "Blindaje Total" (SaaS + C-Suite) |
| :--- | :--- | :--- | :--- |
| **Público Objetivo** | Empresas con equipo interno maduro. | Empresas buscando orden táctico. | Directorios y CEOs con fuga crítica. |
| **Test de Diagnóstico** | Incluido | Incluido | Incluido |
| **Acceso a Cockpit 360**| Dashboard Básico | Dashboard Avanzado + IA | Dashboard Total + Custom APIs |
| **Acompañamiento** | Sin acompañamiento | 1 Revisión Mensual | Dirección Fraccional Semanal (C-Suite) |
| **Modelo de Cobro** | MRR Base (Suscripción Pura) | MRR Intermedio | MRR Alto (Retainer C-Level) + Success Fee |

---

## 4. Infraestructura de Cobro (Pasarelas de Pago)

Para evitar fricciones operativas y dar una imagen de plataforma global, los flujos de cobro en el *Cockpit 360* funcionarán de la siguiente manera:

*   **Suscripciones Mensuales (SaaS):** Automatizadas a través de **Stripe Billing**. Permite cargar la tarjeta de crédito de la empresa y hacer los cobros recurrentes de forma automática mes a mes, reduciendo la carga de cobranza manual.
*   **Grandes Tickets (Setup Fees / Retenedores Altos):** Gestión tradicional mediante transferencia bancaria o integración con pasarelas locales (Webpay Plus B2B o MercadoPago) para transacciones de alto volumen, dependiendo de las políticas de compra de las empresas industriales.
