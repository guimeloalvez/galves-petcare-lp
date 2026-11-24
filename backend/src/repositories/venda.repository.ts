import { db } from "../databse/knex.js";
import type { Venda, CriarVenda } from "../types/venda.js";

class VendaRepository {
  async getAll(): Promise<Venda[]> {
    return await db("vendas").select("*");
  }

  async getById(id: string): Promise<Venda[]> {
    return await db("vendas").where({ id }).select("*");
  }

  async create(dados: CriarVenda): Promise<Venda> {
    const [registro] = await db("vendas").insert({ id_item: dados.id_item, id_funcionario: dados.id_funcionario, id_cliente: dados.id_cliente }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const vendaRepository = new VendaRepository();
