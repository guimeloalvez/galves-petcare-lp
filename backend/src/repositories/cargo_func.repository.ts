import { db } from "../databse/knex.js";
import type { CargoFunc, CriarCargoFunc } from "../types/cargo_func.js";

class CargoFuncRepository {
  async getAll(): Promise<CargoFunc[]> {
    return await db("cargo_func").select("*");
  }

  async getById(id: string): Promise<CargoFunc[]> {
    return await db("cargo_func").where({ id }).select("*");
  }

  async create(dados: CriarCargoFunc): Promise<CargoFunc> {
    const [registro] = await db("cargo_func").insert({ nome: dados.nome }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const cargoFuncRepository = new CargoFuncRepository();
