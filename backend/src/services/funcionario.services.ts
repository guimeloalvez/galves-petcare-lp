import bcrypt from "bcrypt";
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

  async getByEmail(email: string): Promise<Funcionario | null> {
    const res = await pool.query<Funcionario>(
      "SELECT * FROM funcionarios WHERE email = \$1",
      [email],
    );
    return res.rows[0] || null;
  }

  async create(dados: CriarFuncionario): Promise<Funcionario> {
    const saltRounds = 10;
    const senhaCriptografada = await bcrypt.hash(dados.senha, saltRounds);

    const res = await pool.query<Funcionario>(
      `INSERT INTO funcionarios (nome, cpf, email, senha, cargo_func_id, status) 
       VALUES ($1, $2, $3, $4, $5, 'ativo') RETURNING *`,
      [
        dados.nome,
        dados.cpf,
        dados.email,
        senhaCriptografada,
        dados.cargo_func_id,
      ],
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
