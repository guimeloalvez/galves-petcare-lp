export interface Estoque extends CriarEstoque {
  id: string;
}

export interface CriarEstoque {
  nome: string;
  descricao: string;
  quantidade: number;
  valor: number;
  dt_validade: string;
}
