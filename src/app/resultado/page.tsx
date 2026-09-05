'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ResultadoDiagnostico } from '@/lib/types';

export default function ResultadoPage() {
  const router = useRouter();
  const [resultado, setResultado] = useState<ResultadoDiagnostico | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('resultadoDiagnostico');
    if (saved) {
      setResultado(JSON.parse(saved));
    } else {
      router.push('/diagnostico');
    }
  }, [router]);

  if (!resultado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-muted-foreground border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  const formatCurrency = (amount: number, moneda: string) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: moneda,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCriticidadColor = (nivel: string) => {
    switch (nivel.toLowerCase()) {
      case 'crítico': return 'text-destructive border-destructive';
      case 'vulnerable': return 'text-accent border-accent';
      case 'aceptable': return 'text-yellow-500 border-yellow-500';
      case 'robusto': return 'text-green-500 border-green-500';
      default: return 'text-muted-foreground border-border';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header - Print Only */}
        <div className="hidden print:block text-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold">Reporte Ejecutivo de Fuga de EBITDA</h1>
          <p className="text-lg">{resultado.empresa.razonSocial} | {resultado.empresa.rubro}</p>
        </div>

        {/* Hero Impact Card */}
        <section className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden print:border-black print:shadow-none print:bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent pointer-events-none print:hidden"></div>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium print:text-black">Estás perdiendo</h2>
          <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-destructive to-accent mb-6 print:text-black">
            {formatCurrency(resultado.fugaTotal, resultado.empresa.moneda)} <span className="text-3xl md:text-5xl text-foreground print:text-black">al año</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto print:text-black">
            por fricción interna, procesos ineficientes y falta de alineación estratégica.
          </p>
          <div className="mt-8 inline-block px-6 py-3 bg-background border border-border rounded-full print:border-black">
            <span className="font-semibold text-primary">Nivel de Madurez: </span>
            <span className="font-bold">{resultado.nivelMadurezTexto} ({resultado.nivelMadurez.toFixed(1)}/5.0)</span>
          </div>
        </section>

        {/* Breakdown by Category */}
        <section>
          <h3 className="text-2xl font-bold mb-6 print:text-black">Desglose de Fuga por Área</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultado.fugaPorCategoria.map((cat, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 print:border-gray-400 print:bg-transparent">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-lg">{cat.categoria}</h4>
                  <span className={`text-xs font-bold px-2 py-1 rounded border ${getCriticidadColor(cat.nivelCriticidad)} print:text-black print:border-black`}>
                    {cat.nivelCriticidad}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground print:text-gray-600">Puntaje</span>
                    <span className="font-bold">{cat.puntaje.toFixed(1)} / 5</span>
                  </div>
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden print:bg-gray-200">
                    <div 
                      className="h-full bg-primary"
                      style={{ width: `${(cat.puntaje / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border print:border-gray-300">
                  <span className="text-sm text-muted-foreground print:text-gray-600">Impacto Estimado</span>
                  <p className="text-2xl font-bold text-accent print:text-black">
                    {formatCurrency(cat.fuga, resultado.empresa.moneda)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Projects */}
        <section>
          <h3 className="text-2xl font-bold mb-6 print:text-black">Plan de Acción Recomendado</h3>
          <div className="space-y-4">
            {resultado.proyectosEstrategicos.map((proj, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start print:border-gray-400 print:bg-transparent">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-primary mb-2 print:text-black">{proj.titulo}</h4>
                  <p className="text-muted-foreground print:text-gray-700">{proj.descripcion}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-[150px]">
                  <div className="bg-background border border-border rounded-lg p-3 text-center print:border-gray-300">
                    <span className="block text-xs text-muted-foreground print:text-gray-600">Impacto</span>
                    <span className="font-bold text-accent print:text-black">{proj.impacto}</span>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-3 text-center print:border-gray-300">
                    <span className="block text-xs text-muted-foreground print:text-gray-600">Plazo</span>
                    <span className="font-bold">{proj.plazo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Analysis */}
        {resultado.analisisIA && (
          <section className="bg-card/50 border border-primary/30 rounded-2xl p-8 print:border-black print:bg-transparent">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🧠</span>
              <h3 className="text-xl font-bold text-primary print:text-black">Análisis Estratégico</h3>
            </div>
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4 print:text-gray-800 print:border-black">
              "{resultado.analisisIA}"
            </blockquote>
          </section>
        )}

        {/* Call to Action */}
        <section className="flex flex-col sm:flex-row justify-center gap-4 pt-12 print:hidden">
          <button 
            className="px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)]"
            onClick={() => window.open('https://calendly.com/siren-mg', '_blank')}
          >
            Agendar Sesión de Estrategia (30 min)
          </button>
          <button 
            className="px-8 py-4 bg-transparent border border-border text-foreground font-bold rounded-lg hover:bg-card transition-all"
            onClick={() => window.print()}
          >
            Descargar Reporte PDF
          </button>
        </section>

      </div>
    </div>
  );
}
