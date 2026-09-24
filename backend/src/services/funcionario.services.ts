import { pool } from "../databse/connection.js";
import { Funcionario, CriarFuncionario } from "../types/funcionario.js";

class FuncionarioService {
  async getAll(): Promise<Funcionario[]> {
    const res = await pool.query<Funcionario>("SELECT * FROM funcionarios");
    return res.rows;
  }

  async getById(id: string): Promise<Funcionario[]> {
    const res = await pool.query<Funcionario>(
      "SELECT * FROM funcionarios WHERE id = \$1",
      [id],
    );
    return res.rows;
  }

  async create(dados: CriarFuncionario): Promise<Funcionario> {
    const res = await pool.query<Funcionario>(
      `INSERT INTO funcionarios (nome, cpf, cargo_func_id, status) 
       VALUES ($1, $2, $3, 'ativo') RETURNING *`,
      [dados.nome, dados.cpf, dados.cargo_func_id],
    );

    const funcionario = res.rows[0];
    if (!funcionario) throw new Error("Erro ao cadastrar funcionário");
    return funcionario;
  }

  async inativarFuncionario(id: string): Promise<boolean> {
    const res = await pool.query(
      "UPDATE funcionarios SET status='inativo' WHERE id = \$1",
      [id],
    );
    return (res.rowCount ?? 0) > 0;
  }
}

export const funcionarioService = new FuncionarioService();
