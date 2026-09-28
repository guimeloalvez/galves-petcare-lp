import { pool } from "../databse/connection.js";
import { Parceiro, CriarParceiro } from "../types/parceiro.js";

class ParceiroService {
  async getAll(): Promise<Parceiro[]> {
    const res = await pool.query<Parceiro>("SELECT * FROM parceiros");

    return res.rows;
  }

  async getById(id: string): Promise<Parceiro[]> {
    const res = await pool.query<Parceiro>(
      "SELECT * FROM parceiros WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarParceiro): Promise<Parceiro> {
    const res = await pool.query<Parceiro>(
      `INSERT INTO parceiros
        (nome)
       VALUES ($1)
       RETURNING *`,
      [dados.nome],
    );

    const parceiro = res.rows[0];

    if (!parceiro) {
      throw new Error("O banco não retornou o parceiro cadastrado");
    }

    return parceiro;
  }
}

export const parceiroService = new ParceiroService();
