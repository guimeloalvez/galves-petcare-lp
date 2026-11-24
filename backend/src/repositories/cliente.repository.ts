import { db } from "../databse/knex.js";
import type { Cliente, CriarCliente } from "../types/cliente.js";

class ClienteRepository {
  async getAll(): Promise<Cliente[]> {
    return await db("clientes").select("*");
  }

  async getById(id: string): Promise<Cliente[]> {
    return await db("clientes").where({ id }).select("*");
  }

  async create(dados: CriarCliente): Promise<Cliente> {
    const [registro] = await db("clientes").insert({ nome: dados.nome, telefone: dados.telefone, idade: dados.idade, email: dados.email }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }

  async inativarCliente(id: string): Promise<boolean> {
    return (await db("clientes").where({ id }).update({ status: "inativo" })) > 0;
  }
}

export const clientRepository = new ClienteRepository();
