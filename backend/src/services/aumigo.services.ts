import { pool } from "../databse/connection.js";
import { Aumigo, CriarAumigo } from "../types/aumigo.js";

class AumigoService {
  async getAll(): Promise<Aumigo[]> {
    const res = await pool.query<Aumigo>("SELECT * FROM aumigo");

    return res.rows;
  }

  async getById(id: string): Promise<Aumigo[]> {
    const res = await pool.query<Aumigo>("SELECT * FROM aumigo WHERE id = $1", [
      id,
    ]);

    return res.rows;
  }

  async create(dados: CriarAumigo): Promise<Aumigo> {
    const res = await pool.query<Aumigo>(
      `INSERT INTO aumigo
        (dt_inicio, dt_fim, status, id_parceiro)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [dados.dt_inicio, dados.dt_fim, dados.status, dados.id_parceiro],
    );

    const aumigo = res.rows[0];

    if (!aumigo) {
      throw new Error("O banco não retornou o aumigo cadastrado");
    }

    return aumigo;
  }
}

export const aumigoService = new AumigoService();
