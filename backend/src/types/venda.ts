export interface Venda {
  id: string;
  cliente_id: string;
  data_venda: Date;
  valor_total: number;
}

export interface CriarVenda {
  cliente_id: string;
  valor_total: number;
}
