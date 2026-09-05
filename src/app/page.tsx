import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Activity, Target, AlertTriangle, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        
        <div className="max-w-5xl space-y-8 z-10">
          <div className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-4 tracking-wider uppercase border border-border">
            SISTEMA INTELIGENTE RELACIONAL
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-tight">
            Apaga el incendio diario. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Blinda tu Gestión Gerencial.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Las empresas B2B y contratistas mineros facturan millones, pero el EBITDA se evapora en fricciones operacionales invisibles para el Directorio. <strong>Nosotros lo cuantificamos y lo detenemos.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/diagnostico" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 bg-primary text-primary-foreground px-8 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(14,165,233,0.6)] group"
            >
              <Activity className="w-5 h-5 group-hover:animate-pulse" />
              Evaluar Fuga de EBITDA (3 min)
            </Link>
            <Link 
              href="#pilares" 
              className="w-full sm:w-auto flex items-center justify-center h-14 bg-transparent text-foreground border-2 border-border px-8 rounded-lg font-bold text-lg hover:bg-card transition-all"
            >
              Conocer el Método SIREN
            </Link>
          </div>
        </div>
      </section>

      {/* Los 3 Pilares (Según Doctrina Mauricio) */}
      <section id="pilares" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Los 3 Pilares de Nuestra Consultoría</h2>
            <p className="text-muted-foreground text-lg">
              No somos una consultora tradicional. Implementamos gobernanza disruptiva enfocada en tres resultados innegociables para el Gerente General.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors relative overflow-hidden">
              <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Ganancia Monetaria</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Identificamos los flancos débiles en licitaciones, contratos y operaciones en terreno que están drenando tu última línea. <strong>Recuperamos tu rentabilidad.</strong>
              </p>
            </div>
            
            {/* Pilar 2 */}
            <div className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Gobernanza del Negocio</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Democratizamos la Dirección Estratégica. Ordenamos los roles C-Level y establecemos tableros de control gerencial para que la empresa opere sin depender de ti 24/7.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Blindaje del GG</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Protegemos la gestión del Gerente General ante el Directorio mediante reportabilidad online, actas estructuradas y trazabilidad absoluta de las decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El Dolor: Contratistas y B2B */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 bg-card border border-border rounded-3xl p-8 relative shadow-2xl overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-destructive/20 blur-[60px] rounded-full" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <AlertTriangle className="w-10 h-10 text-destructive" />
                <h3 className="text-2xl font-bold">El "Incendio Diario"</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-background rounded-xl p-4 border border-border border-l-4 border-l-destructive">
                  <p className="font-semibold">Desvíos de Margen Bruto y Multas en Faena.</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border border-l-4 border-l-destructive">
                  <p className="font-semibold">Directorio exigiendo resultados sin conocer la fricción real.</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border border-l-4 border-l-destructive">
                  <p className="font-semibold">Talento crítico desalineado del objetivo de EBITDA.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive rounded-full text-sm font-bold tracking-wide uppercase border border-destructive/20">
              Diagnóstico Fase 1
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              ¿Cuánta plata estás dejando en la mesa?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              El algoritmo socrático de SIREN MG evalúa 7 dimensiones operativas críticas. En menos de 3 minutos, obtendrás un <strong>Reporte Ejecutivo de Fuga de EBITDA</strong> y una hoja de ruta con proyectos estratégicos (BSC) priorizados por impacto.
            </p>

            <Link 
              href="/diagnostico" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-xl transition-colors group"
            >
              Iniciar Prediagnóstico Socrático Gratuito
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
