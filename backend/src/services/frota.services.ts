import { pool } from "../databse/connection.js";
import { Frota, CriarFrota } from "../types/frota.js";

class FrotaService {
  async getAll(): Promise<Frota[]> {
    const res = await pool.query<Frota>("SELECT * FROM frotas");

    return res.rows;
  }

  async getById(id: string): Promise<Frota[]> {
    const res = await pool.query<Frota>("SELECT * FROM frotas WHERE id = $1", [
      id,
    ]);

    return res.rows;
  }

  async create(dados: CriarFrota): Promise<Frota> {
    const res = await pool.query<Frota>(
      `INSERT INTO frotas
        (marca, modelo)
       VALUES ($1, $2)
       RETURNING *`,
      [dados.marca, dados.modelo],
    );

    const frota = res.rows[0];

    if (!frota) {
      throw new Error("O banco não retornou a frota cadastrada");
    }

    return frota;
  }
}

export const frotaService = new FrotaService();
