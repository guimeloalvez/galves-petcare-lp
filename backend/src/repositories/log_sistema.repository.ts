import { db } from "../databse/knex.js";
import type { LogSistema, CriarLogSistema } from "../types/log_sistema.js";

class LogSistemaRepository {
  async getAll(): Promise<LogSistema[]> {
    return await db("logs_sistema").select("*");
  }

  async getById(id: string): Promise<LogSistema[]> {
    return await db("logs_sistema").where({ id }).select("*");
  }

  async create(dados: CriarLogSistema): Promise<LogSistema> {
    const [registro] = await db("logs_sistema").insert({ op_realizada: dados.op_realizada, descricao: dados.descricao, id_funcionario: dados.id_funcionario }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const logSistemaRepository = new LogSistemaRepository();
