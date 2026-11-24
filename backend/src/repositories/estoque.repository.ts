import { db } from "../databse/knex.js";
import type { Estoque, CriarEstoque } from "../types/estoque.js";

class EstoqueRepository {
  async getAll(): Promise<Estoque[]> {
    return await db("estoque").select("*");
  }

  async getById(id: string): Promise<Estoque[]> {
    return await db("estoque").where({ id }).select("*");
  }

  async create(dados: CriarEstoque): Promise<Estoque> {
    const [registro] = await db("estoque").insert({ nome: dados.nome, descricao: dados.descricao, quantidade: dados.quantidade, valor: dados.valor, dt_validade: dados.dt_validade }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const estoqueRepository = new EstoqueRepository();
