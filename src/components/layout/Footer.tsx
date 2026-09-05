import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card mt-24">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-primary block mb-4">
              Siren<span className="text-foreground">MG</span>
            </span>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Democratizamos la Dirección Estratégica Corporativa. Identificamos, cuantificamos y detenemos la fuga de EBITDA en empresas B2B a través de metodologías socráticas y gobernanza avanzada.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/diagnostico" className="hover:text-primary transition-colors">Diagnóstico Operacional</Link></li>
              <li><Link href="/#metodologia" className="hover:text-primary transition-colors">Algoritmo de Fuga</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Portal de Clientes (Pronto)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal y Seguridad</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Términos de Servicio</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Políticas de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Seguridad de Datos (ISO/IEC)</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Siren MG. Todos los derechos reservados.</p>
          
          <div className="flex flex-col md:items-end text-center md:text-right p-4 bg-background/50 rounded-lg border border-border/50">
            <p className="font-medium text-foreground mb-1">
              Desarrollado en alianza tecnológica con <span className="text-primary font-bold">Sambalab (Venture Builder)</span>
            </p>
            <p className="text-muted-foreground opacity-80">
              Arquitectura e IA: Daniel García Rojas (CTO & Principal Engineer)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
