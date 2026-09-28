export interface Venda {
  id: string;
  id_item: string;
  id_funcionario: string;
  id_cliente: string;
  data: string;
}

export interface CriarVenda {
  id_item: string;
  id_funcionario: string;
  id_cliente: string;
}
