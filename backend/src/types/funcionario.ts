export interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  cargo_func_id: string;
  status: "ativo" | "inativo";
}

export interface CriarFuncionario {
  nome: string;
  cpf: string;
  cargo_func_id: string;
}
