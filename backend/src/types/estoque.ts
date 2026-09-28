export interface Consulta {
  id: string;
  data: string;
  id_animal: string;
  id_medico: string;
  id_servico: string;
}

export interface CriarConsulta {
  data: string;
  id_animal: string;
  id_medico: string;
  id_servico: string;
}
