import { pool } from "../databse/connection.js";
import { LogSistema, CriarLogSistema } from "../types/log_sistema.js";

class LogSistemaService {
  async getAll(): Promise<LogSistema[]> {
    const res = await pool.query<LogSistema>("SELECT * FROM logs_sistema");

    return res.rows;
  }

  async getById(id: string): Promise<LogSistema[]> {
    const res = await pool.query<LogSistema>(
      "SELECT * FROM logs_sistema WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarLogSistema): Promise<LogSistema> {
    const res = await pool.query<LogSistema>(
      `INSERT INTO logs_sistema
        (op_realizada, descricao, id_funcionario)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [dados.op_realizada, dados.descricao, dados.id_funcionario],
    );

    const log = res.rows[0];

    if (!log) {
      throw new Error("O banco não retornou o log cadastrado");
    }

    return log;
  }
}

export const logSistemaService = new LogSistemaService();
