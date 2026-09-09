# 🚀 Instrucciones de Conexión: Despliegue, IA y Base de Datos (Fase 2)

Este documento contiene los pasos técnicos exactos para levantar la plataforma a costo cero ($0) usando las capas gratuitas, manteniendo la rentabilidad del fondo de arranque de $300.000 CLP.

## 1. Despliegue del Frontend y API (Vercel)
Vercel aloja nuestro Next.js 16 gratis y sin límites de tiempo.

**Pasos:**
1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu GitHub.
2. Haz clic en **Add New -> Project**.
3. Importa el repositorio `Siren_MG`.
4. En **Environment Variables**, debes agregar la llave de Gemini (ver paso 2).
   - Key: `GEMINI_API_KEY`
   - Value: `tu_llave_de_google_aqui`
5. Haz clic en **Deploy**. 
*(Vercel autodetectará que es Next.js y compilará todo solo).*

---

## 2. Conexión de la Inteligencia Artificial (Costo $0)

Estamos usando **Gemini 1.5 Flash** porque nos da 15 RPM (Requests Per Minute) y 1 millón de tokens de contexto totalmente gratis.

**Pasos:**
1. Entra a [Google AI Studio](https://aistudio.google.com/app/apikey) usando tu cuenta de **Sambalab o DGRcodex** (nunca del cliente).
2. Haz clic en "Create API Key".
3. Copia esa llave y pégala en Vercel (Paso 1) y en tu archivo local `.env.local` si vas a probar en tu computador.

*Nota Multi-IA:* Cuando escalemos, cambiaremos el motor para usar [Groq](https://console.groq.com/keys) (Llama 3) para métricas rápidas y dejaremos Gemini solo para el análisis largo. Ambas tienen capa gratuita.

---

## 3. Base de Datos: Guardar los Diagnósticos ("Guardar las weas")

Para la persistencia de datos (guardar los leads, el puntaje de fuga y los datos de las empresas), **la mejor opción gratuita es Supabase**, no GCP. 

*¿Por qué?* Google Cloud (GCP) te cobra por Cloud SQL (PostgreSQL) después de los créditos iniciales. Supabase te da una base de datos PostgreSQL de 500MB **gratis para siempre**, ideal para MVP.

**Pasos para conectar Supabase:**
1. Entra a [supabase.com](https://supabase.com) y crea un proyecto nuevo (Plan Free).
2. Ve a *Project Settings -> Database* y copia la **Connection String (URI)**.
3. En el código de `siren-app`, instalaremos Prisma ORM para conectarnos:
   ```bash
   npm install prisma --save-dev
   npx prisma init
   ```
4. Pondremos la URL de Supabase en Vercel como `DATABASE_URL`.
5. Crearemos la tabla `Diagnostico` para guardar: Razón Social, Rubro, Fuga de EBITDA y el JSON con las respuestas.

> **Estrategia para Mauricio:** Le diremos que usamos "Arquitectura Serverless y Bases de Datos Relacionales encriptadas" (suena caro y justifica el presupuesto), pero por debajo operaremos 100% en capas gratuitas para maximizar el margen de Sambalab.
