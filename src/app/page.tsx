'use client';

import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Activity, Target, AlertTriangle, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();
  
  // Para los iconos con flechas, si es Hebreo (RTL) los invertimos
  const rtlArrow = language === 'he' ? <ArrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />;

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        
        <div className="max-w-5xl space-y-8 z-10">
          <div className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-4 tracking-wider uppercase border border-border">
            {t.landing.tag}
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-tight">
            {t.landing.title1} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t.landing.title2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.landing.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/diagnostico" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 bg-primary text-primary-foreground px-8 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(14,165,233,0.6)] group"
            >
              <Activity className="w-5 h-5 group-hover:animate-pulse" />
              {t.landing.btnPrimary}
            </Link>
            <Link 
              href="#pilares" 
              className="w-full sm:w-auto flex items-center justify-center h-14 bg-transparent text-foreground border-2 border-border px-8 rounded-lg font-bold text-lg hover:bg-card transition-all"
            >
              {t.landing.btnSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Los 3 Pilares */}
      <section id="pilares" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">{t.landing.pillarsTitle}</h2>
            <p className="text-muted-foreground text-lg">
              {t.landing.pillarsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors relative overflow-hidden">
              <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.landing.p1Title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t.landing.p1Desc}
              </p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.landing.p2Title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t.landing.p2Desc}
              </p>
            </div>

            <div className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.landing.p3Title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t.landing.p3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El Dolor */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 bg-card border border-border rounded-3xl p-8 relative shadow-2xl overflow-hidden">
            <div className="absolute -top-24 rtl:-left-24 ltr:-right-24 w-64 h-64 bg-destructive/20 blur-[60px] rounded-full" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <AlertTriangle className="w-10 h-10 text-destructive" />
                <h3 className="text-2xl font-bold">{t.landing.painTitle}</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-background rounded-xl p-4 border border-border border-s-4 border-s-destructive">
                  <p className="font-semibold">{t.landing.pain1}</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border border-s-4 border-s-destructive">
                  <p className="font-semibold">{t.landing.pain2}</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border border-s-4 border-s-destructive">
                  <p className="font-semibold">{t.landing.pain3}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive rounded-full text-sm font-bold tracking-wide uppercase border border-destructive/20">
              {t.landing.diagTag}
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              {t.landing.diagTitle}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.landing.diagDesc}
            </p>

            <Link 
              href="/diagnostico" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-xl transition-colors group"
            >
              {t.landing.diagBtn}
              {rtlArrow}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
