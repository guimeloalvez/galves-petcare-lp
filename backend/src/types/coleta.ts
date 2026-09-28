export interface Coleta {
  id: string;
  dt_coleta: string;
  endereco: string;
  id_cliente: string;
  id_animal: string;
}

export interface CriarColeta {
  dt_coleta: string;
  endereco: string;
  id_cliente: string;
  id_animal: string;
}
