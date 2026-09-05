'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { EmpresaData, RespuestaSocratica, ResultadoDiagnostico } from '@/lib/types';
import { preguntasSocraticas } from '@/lib/preguntas';

export default function DiagnosticoPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0: Empresa, 1-7: Preguntas, 8: Cargando
  const [empresa, setEmpresa] = useState<EmpresaData>({
    razonSocial: '',
    rubro: 'Contratista Minero',
    facturacionAnual: 0,
    moneda: 'CLP',
  });
  const [respuestas, setRespuestas] = useState<RespuestaSocratica[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPreguntas = preguntasSocraticas.length;
  const preguntaActual = step > 0 && step <= totalPreguntas ? preguntasSocraticas[step - 1] : null;

  const handleEmpresaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (empresa.razonSocial && empresa.facturacionAnual > 0) {
      setStep(1);
    }
  };

  const handleRespuesta = (puntaje: number) => {
    if (!preguntaActual) return;

    const nuevaRespuesta = { preguntaId: preguntaActual.id, puntaje };
    setRespuestas([...respuestas, nuevaRespuesta]);

    if (step < totalPreguntas) {
      // Avanzar a la siguiente pregunta con un pequeño retraso
      setTimeout(() => setStep(step + 1), 300);
    } else {
      // Finalizar diagnóstico
      setStep(totalPreguntas + 1);
      submitDiagnostico([...respuestas, nuevaRespuesta]);
    }
  };

  const submitDiagnostico = async (todasRespuestas: RespuestaSocratica[]) => {
    setIsSubmitting(true);
    try {
      const payload = { empresa, respuestas: todasRespuestas };
      const response = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Error al procesar el diagnóstico');
      
      const resultado: ResultadoDiagnostico = await response.json();
      sessionStorage.setItem('resultadoDiagnostico', JSON.stringify(resultado));
      
      router.push('/resultado');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al procesar el diagnóstico. Por favor intenta de nuevo.');
      setStep(totalPreguntas); // Volver a la última pregunta
      setIsSubmitting(false);
    }
  };

  // Render Step 0: Empresa Data
  if (step === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-xl bg-card border border-border rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">Comienza tu Diagnóstico</h1>
          <p className="text-muted-foreground mb-8">Ingresa los datos de tu empresa para un análisis preciso.</p>
          
          <form onSubmit={handleEmpresaSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Razón Social</label>
              <input
                type="text"
                required
                className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                value={empresa.razonSocial}
                onChange={(e) => setEmpresa({ ...empresa, razonSocial: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Rubro</label>
              <select
                className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                value={empresa.rubro}
                onChange={(e) => setEmpresa({ ...empresa, rubro: e.target.value })}
              >
                <option value="Contratista Minero">Contratista Minero</option>
                <option value="Industrial / Manufactura">Industrial / Manufactura</option>
                <option value="Servicios Profesionales">Servicios Profesionales</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Facturación Anual</label>
              <div className="flex gap-4">
                <select
                  className="w-1/4 bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  value={empresa.moneda}
                  onChange={(e) => setEmpresa({ ...empresa, moneda: e.target.value as 'CLP' | 'USD' })}
                >
                  <option value="CLP">CLP</option>
                  <option value="USD">USD</option>
                </select>
                <input
                  type="number"
                  required
                  min="1"
                  className="w-3/4 bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  value={empresa.facturacionAnual || ''}
                  onChange={(e) => setEmpresa({ ...empresa, facturacionAnual: Number(e.target.value) })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-background font-bold rounded-lg p-4 mt-8 hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            >
              Comenzar Diagnóstico
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Step: Loading
  if (step > totalPreguntas || isSubmitting) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
        <div className="w-16 h-16 border-4 border-muted-foreground border-t-primary rounded-full animate-spin mb-8"></div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Calculando tu Fuga de EBITDA...</h2>
        <p className="text-muted-foreground">Analizando las áreas de fricción y estructurando el informe ejecutivo.</p>
      </div>
    );
  }

  // Render Step 1-7: Questions
  if (preguntaActual) {
    const progreso = ((step - 1) / totalPreguntas) * 100;

    return (
      <div className="min-h-screen flex flex-col bg-background p-4 sm:p-8">
        <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col justify-center">
          
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Pregunta {step} de {totalPreguntas}</span>
              <span>{Math.round(progreso)}%</span>
            </div>
            <div className="w-full h-2 bg-card rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progreso}%` }}
              ></div>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-card text-accent border border-border text-sm font-semibold mb-6">
              {preguntaActual.icono} {preguntaActual.categoria}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {preguntaActual.pregunta}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[0, 1, 2, 3, 4, 5].map((puntaje) => (
              <button
                key={puntaje}
                onClick={() => handleRespuesta(puntaje)}
                className="group flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:border-primary hover:bg-muted/10 transition-all active:scale-95"
              >
                <span className="text-2xl font-bold text-foreground group-hover:text-primary mb-2 transition-colors">
                  {puntaje}
                </span>
                <span className="text-xs text-center text-muted-foreground">
                  {puntaje === 0 && (preguntaActual.descripcionNivel0.substring(0, 30) + '...')}
                  {puntaje === 5 && (preguntaActual.descripcionNivel5.substring(0, 30) + '...')}
                  {puntaje > 0 && puntaje < 5 && `Nivel ${puntaje}`}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8 text-sm text-muted-foreground px-4 md:px-0">
            <span className="w-1/3 text-left">← {preguntaActual.descripcionNivel0}</span>
            <span className="w-1/3 text-right">{preguntaActual.descripcionNivel5} →</span>
          </div>

        </div>
      </div>
    );
  }

  return null;
}
