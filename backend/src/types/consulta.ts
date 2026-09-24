export interface Consulta {
  id: string;
  data_hora: Date;
  animal_id: string;
  funcionario_id: string;
  status: string;
  observacoes?: string;
}

export interface CriarConsulta {
  data_hora: Date;
  animal_id: string;
  funcionario_id: string;
  status: string;
  observacoes?: string;
}
