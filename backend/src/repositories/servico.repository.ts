import { db } from "../databse/knex.js";
import type { Servico, CriarServico } from "../types/servico.js";

class ServicoRepository {
  async getAll(): Promise<Servico[]> {
    return await db("servicos").select("*");
  }

  async getById(id: string): Promise<Servico[]> {
    return await db("servicos").where({ id }).select("*");
  }

  async create(dados: CriarServico): Promise<Servico> {
    const [registro] = await db("servicos").insert({ nome: dados.nome }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const servicoRepository = new ServicoRepository();
