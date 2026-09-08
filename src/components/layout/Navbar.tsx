'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { Language } from "@/lib/types";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-primary">
            {t.navbar.brand}<span className="text-foreground">{t.navbar.brandSub}</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase">{language}</span>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button onClick={() => setLanguage('es')} className="w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors rounded-t-lg">🇪🇸 Español</button>
              <button onClick={() => setLanguage('en')} className="w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors">🇺🇸 English</button>
              <button onClick={() => setLanguage('he')} className="w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors rounded-b-lg">🇮🇱 עברית</button>
            </div>
          </div>

          <Link
            href="/diagnostico"
            className="hidden sm:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)]"
          >
            {t.navbar.login}
          </Link>
        </div>
      </div>
    </header>
  );
}
