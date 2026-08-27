import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navbar Placeholder */}
      <header className="flex h-20 w-full items-center justify-between px-8 border-b border-border">
        <div className="text-2xl font-bold text-primary tracking-tight">Siren MG</div>
        <nav>
          <Link href="/diagnostico" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Diagnóstico Express
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="max-w-4xl space-y-8">
          <div className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Sistema Inteligente Relacional
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Toma el <span className="text-primary">Manubrio</span> de Control <br className="hidden md:block"/> de tu Empresa en Tiempo Real.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Democratizamos la Dirección Estratégica para empresas B2B. Pasa de los manuales de escritorio al impacto directo en el EBITDA.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/diagnostico" 
              className="w-full sm:w-auto flex items-center justify-center h-14 bg-primary text-primary-foreground px-8 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)]"
            >
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
      </main>
    </div>
  );
}
