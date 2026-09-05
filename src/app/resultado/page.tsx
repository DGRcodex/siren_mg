'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ResultadoDiagnostico } from '@/lib/types';
import { Target, TrendingUp, AlertTriangle } from 'lucide-react';

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
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:p-0">
      <div className="max-w-5xl mx-auto space-y-12 print:space-y-8">
        
        {/* Header - Print Only Corporate Header */}
        <div className="hidden print:flex justify-between items-center mb-8 border-b-2 border-black pb-6 mt-8">
          <div>
            <h1 className="text-3xl font-black text-black tracking-tighter">
              SIREN<span className="font-light">MG</span>
            </h1>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Democratizando la Dirección Estratégica</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold">Reporte de Fuga de EBITDA</h2>
            <p className="text-md text-gray-600">{resultado.empresa.razonSocial} | {resultado.empresa.rubro}</p>
          </div>
        </div>

        {/* Hero Impact Card */}
        <section className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden print:border-black print:shadow-none print:bg-transparent print:rounded-none print:p-6 print:border-2">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent pointer-events-none print:hidden"></div>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium print:text-black print:font-bold">Estimación de Pérdida Anual Operativa</h2>
          <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-destructive to-accent mb-6 print:text-black print:bg-none flex items-center justify-center gap-4">
            <AlertTriangle className="w-12 h-12 text-destructive print:text-black" />
            {formatCurrency(resultado.fugaTotal, resultado.empresa.moneda)}
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto print:text-black">
            Fuga de liquidez proyectada debido a fricción interna, procesos ineficientes y falta de alineación estratégica (brechas en {resultado.nivelMadurezTexto}).
          </p>
          <div className="mt-8 inline-block px-8 py-4 bg-background border border-border rounded-xl print:border-black print:bg-gray-100">
            <span className="font-semibold text-primary print:text-black">Nivel de Madurez Operacional: </span>
            <span className="font-bold text-xl">{resultado.nivelMadurez.toFixed(1)} / 5.0</span>
          </div>
        </section>

        {/* Strategic Projects (BSC Format) */}
        <section className="print:break-inside-avoid">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-primary print:text-black" />
            <h3 className="text-2xl font-bold print:text-black">Proyectos Estratégicos Recomendados (Fase 1)</h3>
          </div>
          <p className="text-muted-foreground mb-6 print:text-black">
            Iniciativas priorizadas por impacto directo al EBITDA, estructuradas bajo metodología Balanced Scorecard (BSC).
          </p>
          
          <div className="space-y-6">
            {resultado.proyectosEstrategicos.map((proj, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl p-6 relative overflow-hidden print:border-black print:bg-transparent">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary print:bg-black"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded print:bg-gray-200 print:text-black">INICIATIVA {idx + 1}</span>
                      <h4 className="text-xl font-bold text-foreground print:text-black">{proj.titulo}</h4>
                    </div>
                    <p className="text-muted-foreground print:text-gray-800 mb-4">{proj.descripcion}</p>
                    
                    {proj.kpiSugerido && (
                      <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border px-4 py-2 rounded-lg text-sm print:border-black print:bg-gray-100">
                        <TrendingUp className="w-4 h-4 text-accent print:text-black" />
                        <span className="font-semibold text-muted-foreground print:text-black">KPI a medir:</span>
                        <span className="text-foreground font-bold print:text-black">{proj.kpiSugerido}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-row md:flex-col gap-2 min-w-[160px]">
                    <div className="flex-1 bg-card border border-border rounded-lg p-3 text-center print:border-gray-300">
                      <span className="block text-xs text-muted-foreground uppercase print:text-gray-600">Retorno / Impacto</span>
                      <span className="font-bold text-accent print:text-black">{proj.impacto}</span>
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-lg p-3 text-center print:border-gray-300">
                      <span className="block text-xs text-muted-foreground uppercase print:text-gray-600">Horizonte</span>
                      <span className="font-bold text-foreground print:text-black">{proj.plazo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Breakdown by Category */}
        <section className="print:break-before-page pt-8">
          <h3 className="text-2xl font-bold mb-6 print:text-black">Matriz de Brechas (Detalle de Fuga)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultado.fugaPorCategoria.map((cat, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 print:border-gray-400 print:bg-transparent">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-lg leading-tight print:text-black">{cat.categoria}</h4>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground print:text-gray-600">Madurez actual</span>
                    <span className="font-bold print:text-black">{cat.puntaje.toFixed(1)} / 5.0</span>
                  </div>
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden print:bg-gray-200">
                    <div 
                      className={`h-full ${cat.puntaje <= 2 ? 'bg-destructive' : cat.puntaje <= 3 ? 'bg-accent' : 'bg-green-500'} print:bg-black`}
                      style={{ width: `${(cat.puntaje / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex justify-between items-end print:border-gray-300">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase print:text-gray-600">Estado</span>
                    <p className={`font-bold text-sm ${getCriticidadColor(cat.nivelCriticidad)} print:text-black print:border-none`}>
                      {cat.nivelCriticidad}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground uppercase print:text-gray-600">Fuga</span>
                    <p className="text-xl font-bold text-foreground print:text-black">
                      {formatCurrency(cat.fuga, resultado.empresa.moneda)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Analysis */}
        {resultado.analisisIA && (
          <section className="bg-card/30 border border-primary/30 rounded-2xl p-8 print:border-black print:bg-transparent print:mt-12">
            <div className="flex items-center gap-3 mb-4 border-b border-border pb-4 print:border-black">
              <span className="text-2xl">🧠</span>
              <h3 className="text-xl font-bold text-primary print:text-black">Síntesis Estratégica (Generado por IA)</h3>
            </div>
            <p className="text-lg text-foreground whitespace-pre-wrap leading-relaxed print:text-black">
              {resultado.analisisIA}
            </p>
          </section>
        )}

        {/* Call to Action */}
        <section className="flex flex-col sm:flex-row justify-center gap-4 pt-12 pb-24 print:hidden">
          <button 
            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)]"
            onClick={() => window.open('https://calendly.com/siren-mg', '_blank')}
          >
            Agendar Sesión de Asesoría (Fase 2)
          </button>
          <button 
            className="px-8 py-4 bg-transparent border border-border text-foreground font-bold rounded-lg hover:bg-card transition-all"
            onClick={() => window.print()}
          >
            Descargar Reporte SIREN (PDF)
          </button>
        </section>

      </div>
    </div>
  );
}
