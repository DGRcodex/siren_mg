import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldAlert, Activity, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="max-w-4xl space-y-8 z-10">
          <div className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4 tracking-wide uppercase border border-border">
            Sistema Inteligente Relacional
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Toma el <span className="text-primary">Manubrio</span> de Control <br className="hidden md:block"/> de tu Empresa en Tiempo Real
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Democratizamos la Dirección Estratégica para empresas B2B. Pasa de los manuales de escritorio al impacto directo en el EBITDA.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/diagnostico" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 bg-primary text-primary-foreground px-8 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)]"
            >
              <Activity className="w-5 h-5" />
              Evaluar Salud Operacional (3 min)
            </Link>
            <Link 
              href="#metodologia" 
              className="w-full sm:w-auto flex items-center justify-center h-14 bg-card text-card-foreground border border-border px-8 rounded-lg font-semibold text-lg hover:bg-secondary transition-all"
            >
              Conocer la Metodología
            </Link>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor Section */}
      <section id="propuesta" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué las empresas B2B pierden rentabilidad?</h2>
            <p className="text-muted-foreground text-lg">
              El 80% de las fugas de EBITDA ocurren por fricciones internas invisibles para el directorio: descoordinación C-Level, falta de gobernanza y control operacional deficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-background border border-border p-8 rounded-2xl">
              <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fricción Organizacional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Roles ambiguos y procesos no documentados generan una pérdida silenciosa del 3% al 8% de la facturación anual.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-background border border-border p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Captura de EBITDA</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos sistemas de control profundo que transforman el desorden operacional en rentabilidad directa a la última línea.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-background border border-border p-8 rounded-2xl">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dirección Fraccional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acceso a C-Levels estratégicos sin el costo estructural full-time. Gobernanza de clase mundial para empresas en crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section id="metodologia" className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold tracking-wide uppercase border border-border">
              Nuestra Doctrina
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Algoritmo Socrático de Diagnóstico
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No hacemos consultoría tradicional. Utilizamos una matriz de madurez corporativa basada en 7 dimensiones críticas.
            </p>
            
            <ul className="space-y-4">
              {[
                "Gobernanza y Roles C-Level",
                "Control de Desvíos de Margen",
                "Gestión de Personas Clave",
                "Planificación y Flujo de Caja"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/diagnostico" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors group"
            >
              Comenzar tu diagnóstico ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 bg-card border border-border rounded-3xl p-8 relative shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full" />
            <div className="space-y-6 relative z-10">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="text-sm text-muted-foreground mb-2">Fuga de EBITDA Calculada</div>
                <div className="text-4xl font-bold text-destructive font-mono">$ 145.200.000</div>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Nivel de Madurez</div>
                  <div className="text-xl font-bold">2.4 / 5.0</div>
                </div>
                <div className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  Vulnerable
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
