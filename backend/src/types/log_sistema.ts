export interface LogSistema {
  id: string;
  op_realizada: string;
  descricao: string;
  data: string;
  id_funcionario: string;
}

export interface CriarLogSistema {
  op_realizada: string;
  descricao: string;
  id_funcionario: string;
}
