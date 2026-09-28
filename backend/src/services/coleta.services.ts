import { pool } from "../databse/connection.js";
import { Coleta, CriarColeta } from "../types/coleta.js";

class ColetaService {
  async getAll(): Promise<Coleta[]> {
    const res = await pool.query<Coleta>("SELECT * FROM coletas");

    return res.rows;
  }

  async getById(id: string): Promise<Coleta[]> {
    const res = await pool.query<Coleta>(
      "SELECT * FROM coletas WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarColeta): Promise<Coleta> {
    const res = await pool.query<Coleta>(
      `INSERT INTO coletas
        (dt_coleta, endereco, id_cliente, id_animal)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [dados.dt_coleta, dados.endereco, dados.id_cliente, dados.id_animal],
    );

    const coleta = res.rows[0];

    if (!coleta) {
      throw new Error("O banco não retornou a coleta cadastrada");
    }

    return coleta;
  }
}

export const coletaService = new ColetaService();
