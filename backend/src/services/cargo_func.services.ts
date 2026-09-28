import { pool } from "../databse/connection.js";
import { CargoFunc, CriarCargoFunc } from "../types/cargo_func.js";

class CargoFuncService {
  async getAll(): Promise<CargoFunc[]> {
    const res = await pool.query<CargoFunc>("SELECT * FROM cargo_func");

    return res.rows;
  }

  async getById(id: string): Promise<CargoFunc[]> {
    const res = await pool.query<CargoFunc>(
      "SELECT * FROM cargo_func WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarCargoFunc): Promise<CargoFunc> {
    const res = await pool.query<CargoFunc>(
      `INSERT INTO cargo_func
        (nome)
       VALUES ($1)
       RETURNING *`,
      [dados.nome],
    );

    const cargo = res.rows[0];

    if (!cargo) {
      throw new Error("O banco não retornou o cargo cadastrado");
    }

    return cargo;
  }
}

export const cargoFuncService = new CargoFuncService();
