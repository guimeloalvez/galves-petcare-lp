import { db } from "../databse/knex.js";
import type { Parceiro, CriarParceiro } from "../types/parceiro.js";

class ParceiroRepository {
  async getAll(): Promise<Parceiro[]> {
    return await db("parceiros").select("*");
  }

  async getById(id: string): Promise<Parceiro[]> {
    return await db("parceiros").where({ id }).select("*");
  }

  async create(dados: CriarParceiro): Promise<Parceiro> {
    const [registro] = await db("parceiros").insert({ nome: dados.nome }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const parceiroRepository = new ParceiroRepository();
