import { pool } from "../databse/connection.js";
import { Consulta, CriarConsulta } from "../types/consulta.js";

class ConsultaService {
  async getAll(): Promise<Consulta[]> {
    const res = await pool.query<Consulta>("SELECT * FROM consultas");

    return res.rows;
  }

  async getById(id: string): Promise<Consulta[]> {
    const res = await pool.query<Consulta>(
      "SELECT * FROM consultas WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarConsulta): Promise<Consulta> {
    const res = await pool.query<Consulta>(
      `INSERT INTO consultas
        (data, id_animal, id_medico, id_servico)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [dados.data, dados.id_animal, dados.id_medico, dados.id_servico],
    );

    const consulta = res.rows[0];

    if (!consulta) {
      throw new Error("O banco não retornou a consulta cadastrada");
    }

    return consulta;
  }
}

export const consultaService = new ConsultaService();
