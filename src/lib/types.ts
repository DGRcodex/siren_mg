export type Moneda = 'CLP' | 'USD';

export interface EmpresaData {
  razonSocial: string;
  rubro: string;
  facturacionAnual: number;
  moneda: Moneda;
}

export interface PreguntaSocratica {
  id: string;
  categoria: string;
  icono: string;
  pregunta: string;
  descripcionNivel0: string;
  descripcionNivel5: string;
  pesoEbitda: number; // weight factor for EBITDA leak calculation
}

export interface RespuestaSocratica {
  preguntaId: string;
  puntaje: number; // 0 to 5
}

export interface ResultadoDiagnostico {
  empresa: EmpresaData;
  respuestas: RespuestaSocratica[];
  fugaTotal: number;
  fugaPorCategoria: { categoria: string; fuga: number; puntaje: number; nivelCriticidad: string }[];
  nivelMadurez: number; // 0 to 5 global average
  nivelMadurezTexto: string;
  proyectosEstrategicos: { titulo: string; descripcion: string; impacto: string; plazo: string }[];
  analisisIA?: string;
}
