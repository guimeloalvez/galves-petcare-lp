export interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  cargo_func_id: string;
  status: "ativo" | "inativo";
}

export interface CriarFuncionario {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  cargo_func_id: string;
}

export interface RespostaLogin {
  nome: string;
  email: string;
  cargo: {
    id: string;
    nome: string;
  };
  token: string;
}
