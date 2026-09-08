import { PreguntaSocratica, Language } from './types';

export const getPreguntasSocraticas = (lang: Language): PreguntaSocratica[] => {
  const baseWeights = {
    q1: 0.20,
    q2: 0.18,
    q3: 0.15,
    q4: 0.15,
    q5: 0.12,
    q6: 0.10,
    q7: 0.10,
  };

  const translations = {
    es: [
      {
        id: 'q1',
        categoria: 'Gobernanza y Roles C-Level',
        icono: '👑',
        pregunta: '¿Existe claridad absoluta, respaldada por indicadores de desempeño (KPIs), sobre las responsabilidades de los líderes (C-Level) en la toma de decisiones estratégicas?',
        descripcionNivel0: 'Caos total, sin estructura. Las decisiones se toman por intuición y no existen roles definidos ni indicadores de éxito.',
        descripcionNivel5: 'Gobernanza de clase mundial. Roles C-Level empoderados, con OKRs alineados al directorio y gobierno corporativo sólido.',
      },
      {
        id: 'q2',
        categoria: 'Licitaciones y Control de Desvíos de Margen',
        icono: '📊',
        pregunta: '¿Qué tan robusto es su proceso de análisis de precios unitarios y control de cambios de alcance para evitar desvíos en el margen proyectado?',
        descripcionNivel0: 'Sin control. Las licitaciones se ganan por precio sin análisis profundo, y los sobrecostos no se detectan a tiempo.',
        descripcionNivel5: 'Control riguroso. Modelo de pricing predictivo, gestión de contratos ágil y detección en tiempo real de desviaciones de margen.',
      },
      {
        id: 'q3',
        categoria: 'Gestión de Personas y Competencias Clave',
        icono: '👥',
        pregunta: '¿La organización retiene al talento crítico y desarrolla planes de sucesión para las posiciones que sostienen la continuidad operacional?',
        descripcionNivel0: 'Alta rotación, sin planes de retención. El conocimiento crítico reside en personas específicas sin respaldo.',
        descripcionNivel5: 'Gestión de talento estratégica. Planes de carrera, matriz de competencias viva y retención de talento clave por sobre el mercado.',
      },
      {
        id: 'q4',
        categoria: 'Control de Operaciones y Multas en Faena',
        icono: '⚙️',
        pregunta: '¿Existe una supervisión sistemática de la ejecución en terreno que anticipe retrasos operacionales y evite la aplicación de multas?',
        descripcionNivel0: 'Reactividad total. Las operaciones sufren paradas constantes y las multas por incumplimiento son habituales.',
        descripcionNivel5: 'Operaciones resilientes. Monitoreo predictivo de KPIs operativos, cero multas en los últimos 24 meses y excelencia en la ejecución.',
      },
      {
        id: 'q5',
        categoria: 'Planificación Financiera y Flujo de Caja',
        icono: '💰',
        pregunta: '¿Cuenta con un modelo financiero que proyecte escenarios de estrés de liquidez (flujo de caja) a 12 meses de manera confiable?',
        descripcionNivel0: 'Gestión ciega. Se vive el día a día financiero, sin visibilidad del capital de trabajo ni proyecciones de caja.',
        descripcionNivel5: 'Finanzas estratégicas. Modelamiento de escenarios de estrés, optimización del ciclo de caja y políticas de tesorería eficientes.',
      },
      {
        id: 'q6',
        categoria: 'Comercialización y Cartera de Clientes',
        icono: '🤝',
        pregunta: '¿La empresa cuenta con una estrategia de diversificación que mitigue el riesgo de concentración de ingresos en pocos clientes o mandantes?',
        descripcionNivel0: 'Alta dependencia. Más del 80% de los ingresos provienen de 1 o 2 clientes, sin esfuerzo activo por diversificar.',
        descripcionNivel5: 'Cartera diversificada y rentable. Estrategia B2B sofisticada, baja dependencia de un solo mandante y alto lifetime value (LTV).',
      },
      {
        id: 'q7',
        categoria: 'Tecnología y Sistemas de Información',
        icono: '💻',
        pregunta: '¿Las plataformas tecnológicas actuales (ERP, CRM) entregan una única fuente de verdad en tiempo real para la toma de decisiones gerenciales?',
        descripcionNivel0: 'Silos de información. Uso excesivo de hojas de cálculo manuales, datos inconsistentes y sin integración de sistemas.',
        descripcionNivel5: 'Transformación digital madura. Arquitectura de datos centralizada, ERP plenamente integrado y dashboards automatizados (BI).',
      }
    ],
    en: [
      {
        id: 'q1',
        categoria: 'Governance & C-Level Roles',
        icono: '👑',
        pregunta: 'Is there absolute clarity, backed by KPIs, regarding the responsibilities of leaders (C-Level) in strategic decision-making?',
        descripcionNivel0: 'Total chaos, no structure. Decisions are based on intuition, no defined roles or success metrics.',
        descripcionNivel5: 'World-class governance. Empowered C-Level roles, OKRs aligned with the board, solid corporate governance.',
      },
      {
        id: 'q2',
        categoria: 'Bidding & Margin Deviation Control',
        icono: '📊',
        pregunta: 'How robust is your unit price analysis and scope change control process to prevent deviations in the projected margin?',
        descripcionNivel0: 'No control. Bids are won by price without deep analysis, and cost overruns are not detected in time.',
        descripcionNivel5: 'Rigorous control. Predictive pricing model, agile contract management, and real-time detection of margin deviations.',
      },
      {
        id: 'q3',
        categoria: 'People Management & Core Competencies',
        icono: '👥',
        pregunta: 'Does the organization retain critical talent and develop succession plans for positions that sustain operational continuity?',
        descripcionNivel0: 'High turnover, no retention plans. Critical knowledge resides in specific people without backup.',
        descripcionNivel5: 'Strategic talent management. Career plans, living competency matrix, and retention of key talent above market rates.',
      },
      {
        id: 'q4',
        categoria: 'Operations Control & Field Fines',
        icono: '⚙️',
        pregunta: 'Is there a systematic supervision of field execution that anticipates operational delays and avoids fines?',
        descripcionNivel0: 'Total reactivity. Operations suffer constant stoppages and non-compliance fines are common.',
        descripcionNivel5: 'Resilient operations. Predictive monitoring of operational KPIs, zero fines in the last 24 months, and execution excellence.',
      },
      {
        id: 'q5',
        categoria: 'Financial Planning & Cash Flow',
        icono: '💰',
        pregunta: 'Do you have a financial model that reliably projects liquidity stress scenarios (cash flow) for 12 months?',
        descripcionNivel0: 'Blind management. Living day-to-day financially, without visibility into working capital or cash projections.',
        descripcionNivel5: 'Strategic finance. Stress scenario modeling, cash cycle optimization, and efficient treasury policies.',
      },
      {
        id: 'q6',
        categoria: 'Commercialization & Client Portfolio',
        icono: '🤝',
        pregunta: 'Does the company have a diversification strategy that mitigates the risk of revenue concentration in a few clients or principals?',
        descripcionNivel0: 'High dependency. Over 80% of revenue comes from 1 or 2 clients, with no active effort to diversify.',
        descripcionNivel5: 'Diversified and profitable portfolio. Sophisticated B2B strategy, low dependency on a single principal, and high lifetime value (LTV).',
      },
      {
        id: 'q7',
        categoria: 'Technology & Information Systems',
        icono: '💻',
        pregunta: 'Do the current technological platforms (ERP, CRM) provide a single source of truth in real-time for management decision-making?',
        descripcionNivel0: 'Information silos. Excessive use of manual spreadsheets, inconsistent data, and no system integration.',
        descripcionNivel5: 'Mature digital transformation. Centralized data architecture, fully integrated ERP, and automated dashboards (BI).',
      }
    ],
    he: [
      {
        id: 'q1',
        categoria: 'משילות ותפקידי הנהלה',
        icono: '👑',
        pregunta: 'האם ישנה בהירות מוחלטת, המגובה במדדי ביצוע מרכזיים (KPIs), לגבי תחומי האחריות של המנהלים (C-Level) בקבלת החלטות אסטרטגיות?',
        descripcionNivel0: 'כאוס מוחלט, ללא מבנה. החלטות מתקבלות על סמך אינטואיציה ואין תפקידים מוגדרים או מדדי הצלחה.',
        descripcionNivel5: 'משילות ברמה עולמית. תפקידי הנהלה מועצמים, עם OKRs המיושרים עם הדירקטוריון וממשל תאגידי איתן.',
      },
      {
        id: 'q2',
        categoria: 'מכרזים ובקרת סטיות רווח',
        icono: '📊',
        pregunta: 'עד כמה חזק תהליך ניתוח מחירי היחידה ובקרת שינויי היקף שלך כדי למנוע סטיות בשולי הרווח החזויים?',
        descripcionNivel0: 'אין שליטה. מכרזים זוכים לפי מחיר ללא ניתוח מעמיק, וחריגות מעלויות לא מתגלות בזמן.',
        descripcionNivel5: 'שליטה קפדנית. מודל תמחור חזוי, ניהול חוזים זריז וזיהוי בזמן אמת של סטיות ברווח.',
      },
      {
        id: 'q3',
        categoria: 'ניהול אנשים וכישורי ליבה',
        icono: '👥',
        pregunta: 'האם הארגון משמר כישרונות קריטיים ומפתח תוכניות המשכיות לתפקידים שמקיימים רציפות תפעולית?',
        descripcionNivel0: 'תחלופה גבוהה, ללא תוכניות שימור. ידע קריטי שוכן אצל אנשים ספציפיים ללא גיבוי.',
        descripcionNivel5: 'ניהול כישרונות אסטרטגי. תוכניות קריירה, מטריצת כישורים חיה ושימור כישרונות מפתח מעל מחירי השוק.',
      },
      {
        id: 'q4',
        categoria: 'בקרת תפעול וקנסות שטח',
        icono: '⚙️',
        pregunta: 'האם ישנו פיקוח שיטתי על ביצוע בשטח שצופה עיכובים תפעוליים ומונע הטלת קנסות?',
        descripcionNivel0: 'תגובתיות מוחלטת. הפעילות סובלת מהפסקות תכופות וקנסות על אי עמידה בתנאים הם נפוצים.',
        descripcionNivel5: 'תפעול חסון. ניטור חזוי של KPIs תפעוליים, אפס קנסות ב-24 החודשים האחרונים ומצוינות בביצוע.',
      },
      {
        id: 'q5',
        categoria: 'תכנון פיננסי ותזרים מזומנים',
        icono: '💰',
        pregunta: 'האם יש לכם מודל פיננסי שחוזה תרחישי לחץ נזילות (תזרים מזומנים) ל-12 חודשים בצורה אמינה?',
        descripcionNivel0: 'ניהול עיוור. חיים מיום ליום מבחינה פיננסית, ללא נראות להון חוזר או תחזיות תזרים.',
        descripcionNivel5: 'פיננסים אסטרטגיים. מודלים של תרחישי לחץ, אופטימיזציה של מחזור מזומנים ומדיניות אוצר יעילה.',
      },
      {
        id: 'q6',
        categoria: 'מסחור ותיק לקוחות',
        icono: '🤝',
        pregunta: 'האם לחברה יש אסטרטגיית גיוון המפחיתה את סיכון ריכוז ההכנסות במספר מצומצם של לקוחות?',
        descripcionNivel0: 'תלות גבוהה. מעל 80% מההכנסות מגיעות מ-1 או 2 לקוחות, ללא מאמץ פעיל לגוון.',
        descripcionNivel5: 'תיק מגוון ורווחי. אסטרטגיית B2B מתוחכמת, תלות נמוכה בלקוח יחיד ושווי חיי לקוח (LTV) גבוה.',
      },
      {
        id: 'q7',
        categoria: 'טכנולוגיה ומערכות מידע',
        icono: '💻',
        pregunta: 'האם הפלטפורמות הטכנולוגיות הנוכחיות (ERP, CRM) מספקות מקור אמת יחיד בזמן אמת לקבלת החלטות ניהוליות?',
        descripcionNivel0: 'ממגורות מידע. שימוש מופרז בגיליונות אלקטרוניים ידניים, נתונים לא עקביים וללא אינטגרציית מערכות.',
        descripcionNivel5: 'טרנספורמציה דיגיטלית בוגרת. ארכיטקטורת נתונים מרכזית, ERP משולב במלואו ולוחות מחוונים אוטומטיים (BI).',
      }
    ]
  };

  return translations[lang].map(q => ({
    ...q,
    pesoEbitda: baseWeights[q.id as keyof typeof baseWeights]
  }));
};

// Mantenemos la constante original (en español) por retrocompatibilidad donde no haya contexto
export const preguntasSocraticas = getPreguntasSocraticas('es');
