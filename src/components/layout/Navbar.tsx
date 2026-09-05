import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-primary">
            Siren<span className="text-foreground">MG</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/#propuesta" className="hover:text-primary transition-colors">Propuesta de Valor</Link>
          <Link href="/#metodologia" className="hover:text-primary transition-colors">Metodología</Link>
          <Link href="/#resultados" className="hover:text-primary transition-colors">Resultados</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/diagnostico"
            className="hidden sm:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)]"
          >
            Diagnóstico Express
          </Link>
        </div>
      </div>
    </header>
  );
}
