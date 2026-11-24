import { db } from "../databse/knex.js";
import type { Consulta, CriarConsulta } from "../types/consulta.js";

class ConsultaRepository {
  async getAll(): Promise<Consulta[]> {
    return await db("consultas").select("*");
  }

  async getById(id: string): Promise<Consulta[]> {
    return await db("consultas").where({ id }).select("*");
  }

  async create(dados: CriarConsulta): Promise<Consulta> {
    const [registro] = await db("consultas").insert({ data: dados.data, id_animal: dados.id_animal, id_medico: dados.id_medico, id_servico: dados.id_servico }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const consultaRepository = new ConsultaRepository();
