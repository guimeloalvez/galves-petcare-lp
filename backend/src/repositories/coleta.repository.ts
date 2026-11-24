import { db } from "../databse/knex.js";
import type { Coleta, CriarColeta } from "../types/coleta.js";

class ColetaRepository {
  async getAll(): Promise<Coleta[]> {
    return await db("coletas").select("*");
  }

  async getById(id: string): Promise<Coleta[]> {
    return await db("coletas").where({ id }).select("*");
  }

  async create(dados: CriarColeta): Promise<Coleta> {
    const [registro] = await db("coletas").insert({ dt_coleta: dados.dt_coleta, endereco: dados.endereco, id_cliente: dados.id_cliente, id_animal: dados.id_animal }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const coletaRepository = new ColetaRepository();
