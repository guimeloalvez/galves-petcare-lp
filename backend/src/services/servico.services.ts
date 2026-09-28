import { pool } from "../databse/connection.js";
import { Servico, CriarServico } from "../types/servico.js";

class ServicoService {
  async getAll(): Promise<Servico[]> {
    const res = await pool.query<Servico>("SELECT * FROM servicos");

    return res.rows;
  }

  async getById(id: string): Promise<Servico[]> {
    const res = await pool.query<Servico>(
      "SELECT * FROM servicos WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarServico): Promise<Servico> {
    const res = await pool.query<Servico>(
      `INSERT INTO servicos
        (nome)
       VALUES ($1)
       RETURNING *`,
      [dados.nome],
    );

    const servico = res.rows[0];

    if (!servico) {
      throw new Error("O banco não retornou o serviço cadastrado");
    }

    return servico;
  }
}

export const servicoService = new ServicoService();
