import { logSistemaRepository } from "../repositories/log_sistema.repository.js";
import type { CriarLogSistema } from "../types/log_sistema.js";

class LogSistemaService {
  async getAll() {
    return await logSistemaRepository.getAll();
  }

  async getById(id: string) {
    return await logSistemaRepository.getById(id);
  }

  async create(dados: CriarLogSistema) {
    return await logSistemaRepository.create(dados);
  }
}

export const logSistemaService = new LogSistemaService();
