import { db } from "../databse/knex.js";
import type { Aumigo, CriarAumigo } from "../types/aumigo.js";

class AumigoRepository {
  async getAll(): Promise<Aumigo[]> {
    return await db("aumigo").select("*");
  }

  async getById(id: string): Promise<Aumigo[]> {
    return await db("aumigo").where({ id }).select("*");
  }

  async create(dados: CriarAumigo): Promise<Aumigo> {
    const [registro] = await db("aumigo").insert({ dt_inicio: dados.dt_inicio, dt_fim: dados.dt_fim, status: dados.status, id_parceiro: dados.id_parceiro }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const aumigoRepository = new AumigoRepository();
