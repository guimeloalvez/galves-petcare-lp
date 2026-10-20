export interface Funcionario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  id_cargo: string;
  status: "ativo" | "inativo";
}

export interface CriarFuncionario {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  id_cargo: string;
  status: string;
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
