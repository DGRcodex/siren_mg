'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { EmpresaData, RespuestaSocratica, ResultadoDiagnostico } from '@/lib/types';
import { preguntasSocraticas } from '@/lib/preguntas';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DiagnosticoPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); 
  const [empresa, setEmpresa] = useState<EmpresaData>({
    razonSocial: '',
    rubro: 'Contratista Minero',
    facturacionAnual: 0,
    moneda: 'CLP',
  });
  
  // Guardamos las respuestas temporalmente antes de enviarlas. 
  // Ahora el index del array es `step - 1`.
  const [respuestas, setRespuestas] = useState<number[]>(Array(preguntasSocraticas.length).fill(-1));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPreguntas = preguntasSocraticas.length;
  
  // Cargar estado guardado al iniciar
  useEffect(() => {
    const guardado = sessionStorage.getItem('diagnosticoBorrador');
    if (guardado) {
      try {
        const parsed = JSON.parse(guardado);
        if (parsed.empresa) setEmpresa(parsed.empresa);
        if (parsed.respuestas) setRespuestas(parsed.respuestas);
        if (parsed.step !== undefined) setStep(parsed.step);
      } catch (e) {
        console.error('Error loading draft', e);
      }
    }
  }, []);

  // Guardar borrador cada vez que cambia algo
  useEffect(() => {
    // No guardar si estamos enviando
    if (step <= totalPreguntas) {
      sessionStorage.setItem('diagnosticoBorrador', JSON.stringify({ empresa, respuestas, step }));
    }
  }, [empresa, respuestas, step, totalPreguntas]);

  const preguntaActual = step > 0 && step <= totalPreguntas ? preguntasSocraticas[step - 1] : null;

  const handleEmpresaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (empresa.razonSocial && empresa.facturacionAnual > 0) {
      setStep(1);
    }
  };

  const seleccionarPuntaje = (puntaje: number) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[step - 1] = puntaje;
    setRespuestas(nuevasRespuestas);
  };

  const irAdelante = () => {
    if (step < totalPreguntas) {
      setStep(step + 1);
    } else {
      finalizarDiagnostico();
    }
  };

  const irAtras = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const finalizarDiagnostico = async () => {
    setIsSubmitting(true);
    setStep(totalPreguntas + 1); // Loading state

    const payloadRespuestas: RespuestaSocratica[] = respuestas.map((puntaje, index) => ({
      preguntaId: preguntasSocraticas[index].id,
      puntaje: puntaje,
    }));

    try {
      const payload = { empresa, respuestas: payloadRespuestas };
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
      setStep(totalPreguntas); // Volver
      setIsSubmitting(false);
    }
  };

  // Render Step 0: Empresa Data
  if (step === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-2xl bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="mb-8 border-b border-border pb-6">
            <h1 className="text-3xl font-bold text-foreground mb-3">Perfilamiento Estratégico</h1>
            <p className="text-muted-foreground text-lg">Para cuantificar tu fuga de EBITDA, necesitamos un perfil básico.</p>
          </div>
          
          <form onSubmit={handleEmpresaSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Razón Social o Nombre Fantasía</label>
              <input
                type="text"
                required
                className="w-full bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg"
                value={empresa.razonSocial}
                onChange={(e) => setEmpresa({ ...empresa, razonSocial: e.target.value })}
                placeholder="Ej: Minera ABC Spa"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Rubro / Industria</label>
              <select
                className="w-full bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg"
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
              <label className="block text-sm font-semibold text-foreground mb-2">Facturación Anual Estimada</label>
              <div className="flex gap-4">
                <select
                  className="w-1/4 bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg font-medium"
                  value={empresa.moneda}
                  onChange={(e) => setEmpresa({ ...empresa, moneda: e.target.value as 'CLP' | 'USD' })}
                >
                  <option value="CLP">CLP ($)</option>
                  <option value="USD">USD ($)</option>
                </select>
                <input
                  type="number"
                  required
                  min="1"
                  className="w-3/4 bg-background border border-border rounded-lg p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-lg"
                  value={empresa.facturacionAnual || ''}
                  onChange={(e) => setEmpresa({ ...empresa, facturacionAnual: Number(e.target.value) })}
                  placeholder="0"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">La facturación se usa exclusivamente para el algoritmo de impacto.</p>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-lg p-4 hover:bg-primary/90 transition-all shadow-lg text-lg"
              >
                Iniciar Evaluación <ArrowRight className="w-5 h-5" />
              </button>
            </div>
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
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Cruzando respuestas con la matriz de madurez corporativa SIREN y generando plan de contingencia.
        </p>
      </div>
    );
  }

  // Render Step 1-7: Questions
  if (preguntaActual) {
    const progreso = ((step - 1) / totalPreguntas) * 100;
    const puntajeSeleccionado = respuestas[step - 1];

    const esValidoParaAvanzar = puntajeSeleccionado !== -1;

    return (
      <div className="min-h-screen flex flex-col bg-background p-4 sm:p-8">
        <div className="max-w-4xl w-full mx-auto flex-1 flex flex-col">
          
          {/* Progress Bar & Header */}
          <div className="mb-12 mt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Factor {step} de {totalPreguntas}
              </span>
              <span className="text-sm font-semibold text-primary">{Math.round(progreso)}% Completado</span>
            </div>
            <div className="w-full h-2 bg-card rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progreso}%` }}
              ></div>
            </div>
          </div>

          {/* Question Display */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground text-sm font-semibold mb-6 border border-border">
              <span>{preguntaActual.icono}</span>
              <span>{preguntaActual.categoria}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
              {preguntaActual.pregunta}
            </h2>
          </div>

          {/* Scale 0-5 */}
          <div className="flex-1">
            <p className="text-muted-foreground mb-6 font-medium">Selecciona tu nivel de madurez actual (0 = Crítico, 5 = Excelencia):</p>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
              {[0, 1, 2, 3, 4, 5].map((puntaje) => {
                const isSelected = puntajeSeleccionado === puntaje;
                return (
                  <button
                    key={puntaje}
                    onClick={() => seleccionarPuntaje(puntaje)}
                    className={`relative flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${
                      isSelected 
                        ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(14,165,233,0.2)]' 
                        : 'border-border bg-card hover:border-primary/50 hover:bg-muted/10'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                    <span className={`text-3xl font-bold mb-2 ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                      {puntaje}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Clearer Explanations (Mauricio's feedback) */}
            <div className="bg-card border border-border rounded-xl p-6 mb-12 flex flex-col md:flex-row gap-6 justify-between">
              <div className="md:w-1/2">
                <span className="inline-block px-2 py-1 bg-destructive/10 text-destructive text-xs font-bold rounded mb-2">NIVEL 0</span>
                <p className="text-sm text-muted-foreground">{preguntaActual.descripcionNivel0}</p>
              </div>
              <div className="hidden md:block w-px bg-border"></div>
              <div className="md:w-1/2">
                <span className="inline-block px-2 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded mb-2">NIVEL 5</span>
                <p className="text-sm text-muted-foreground">{preguntaActual.descripcionNivel5}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between py-6 border-t border-border mt-auto">
            <button
              onClick={irAtras}
              className="flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" /> Atrás
            </button>
            
            <button
              onClick={irAdelante}
              disabled={!esValidoParaAvanzar}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all ${
                esValidoParaAvanzar 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg cursor-pointer' 
                  : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
              }`}
            >
              {step === totalPreguntas ? 'Generar Reporte' : 'Siguiente'} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    );
  }

  return null;
}
