import { db } from "../databse/knex.js";
import type { RegistroPonto, CriarRegistroPonto } from "../types/registro_ponto.js";

class RegistroPontoRepository {
  async getAll(): Promise<RegistroPonto[]> {
    return await db("registro_ponto").select("*");
  }

  async getById(id: string): Promise<RegistroPonto[]> {
    return await db("registro_ponto").where({ id }).select("*");
  }

  async create(dados: CriarRegistroPonto): Promise<RegistroPonto> {
    const [registro] = await db("registro_ponto").insert({ data: dados.data, id_funcionario: dados.id_funcionario }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const registroPontoRepository = new RegistroPontoRepository();
