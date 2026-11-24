import { db } from "../databse/knex.js";
import type { Funcionario, CriarFuncionario } from "../types/funcionarios.js";

class FuncionarioRepository {
  async getAll(): Promise<Funcionario[]> {
    return await db("funcionarios").select("*");
  }

  async getById(id: string): Promise<Funcionario[]> {
    return await db("funcionarios").where({ id }).select("*");
  }

  async create(dados: CriarFuncionario): Promise<Funcionario> {
    const [registro] = await db("funcionarios").insert({ nome: dados.nome, email: dados.email, senha: dados.senha, id_cargo: dados.id_cargo, status: "ativo" }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }

  async getByEmail(email: string): Promise<Funcionario | null> {
    return (await db("funcionarios").where({ email }).first()) || null;
  }

  async inativarFuncionario(id: string): Promise<boolean> {
    return (await db("funcionarios").where({ id }).update({ status: "inativo" })) > 0;
  }
}

export const funcionarioRepository = new FuncionarioRepository();
