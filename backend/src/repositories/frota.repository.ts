import { db } from "../databse/knex.js";
import type { Frota, CriarFrota } from "../types/frota.js";

class FrotaRepository {
  async getAll(): Promise<Frota[]> {
    return await db("frotas").select("*");
  }

  async getById(id: string): Promise<Frota[]> {
    return await db("frotas").where({ id }).select("*");
  }

  async create(dados: CriarFrota): Promise<Frota> {
    const [registro] = await db("frotas").insert({ marca: dados.marca, modelo: dados.modelo }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const frotaRepository = new FrotaRepository();
