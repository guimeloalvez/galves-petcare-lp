import { pool } from "../databse/connection.js";
import { RegistroPonto, CriarRegistroPonto } from "../types/registro_ponto.js";

class RegistroPontoService {
  async getAll(): Promise<RegistroPonto[]> {
    const res = await pool.query<RegistroPonto>("SELECT * FROM registro_ponto");

    return res.rows;
  }

  async getById(id: string): Promise<RegistroPonto[]> {
    const res = await pool.query<RegistroPonto>(
      "SELECT * FROM registro_ponto WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarRegistroPonto): Promise<RegistroPonto> {
    const res = await pool.query<RegistroPonto>(
      `INSERT INTO registro_ponto
        (data, id_funcionario)
       VALUES ($1, $2)
       RETURNING *`,
      [dados.data, dados.id_funcionario],
    );

    const registro = res.rows[0];

    if (!registro) {
      throw new Error("O banco não retornou o registro de ponto cadastrado");
    }

    return registro;
  }
}

export const registroPontoService = new RegistroPontoService();
