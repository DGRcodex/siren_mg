# Implementación de Multi-idioma (Español, Inglés, Hebreo)

## Objetivo
Implementar soporte de internacionalización (i18n) en la plataforma Siren MG para los idiomas Español (es), Inglés (en) y Hebreo (he). Esto incluye soportar lectura de Derecha-a-Izquierda (RTL - Right to Left) para el hebreo.

## Cambios Propuestos

### 1. Sistema de Diccionarios y Contexto
- **[NEW] `src/context/LanguageContext.tsx`**: Un proveedor de estado global (React Context) que mantendrá el idioma seleccionado y cambiará dinámicamente el atributo `dir="ltr"` o `dir="rtl"` en el HTML.
- **[NEW] `src/locales/dictionaries.ts`**: Archivo con las traducciones estáticas para la Landing Page, botones, y textos estructurales de la web en los 3 idiomas.

### 2. Traducción de Base de Datos Estática
- **[MODIFY] `src/lib/preguntas.ts`**: Transformar el array estático de preguntas en un objeto o función que retorne las preguntas traducidas según el idioma seleccionado.

### 3. Actualización de Interfaz (UI)
- **[MODIFY] `src/components/layout/Navbar.tsx`**: Añadir un selector de idioma (🇪🇸 ES | 🇬🇧 EN | 🇮🇱 HE) en la barra de navegación.
- **[MODIFY] `src/app/page.tsx` (Landing)**: Reemplazar textos duros (hardcoded) por llamadas al diccionario.
- **[MODIFY] `src/app/diagnostico/page.tsx`**: Consumir las preguntas en el idioma activo.
- **[MODIFY] `src/app/resultado/page.tsx`**: Traducir el dashboard de BSC y textos fijos.

### 4. Soporte Bidireccional (RTL) para Hebreo
- Al seleccionar Hebreo, la web completa invertirá su orientación de lectura. Como estamos usando Tailwind CSS, nos aseguraremos de que las propiedades lógicas y flexbox se adapten al atributo `dir="rtl"`.

### 5. Motor de IA Bilingüe/Trilingüe
- **[MODIFY] `src/app/api/diagnostico/route.ts`**: Enviaremos el `locale` (idioma) como parámetro a Gemini para obligarlo a que el "Análisis Estratégico" sea redactado en el mismo idioma que el usuario seleccionó.

## Consideraciones Especiales
- **Refactorización profunda**: Esto requiere tocar prácticamente todos los archivos de la interfaz para quitar los textos estáticos.
- **Tiempo de ejecución**: Es una tarea intensiva pero le dará un estándar global instantáneo a la plataforma (muy útil para vender a contratistas internacionales).

