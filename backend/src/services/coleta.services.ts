import { coletaRepository } from "../repositories/coleta.repository.js";
import type { CriarColeta } from "../types/coleta.js";

class ColetaService {
  async getAll() {
    return await coletaRepository.getAll();
  }

  async getById(id: string) {
    return await coletaRepository.getById(id);
  }

  async create(dados: CriarColeta) {
    return await coletaRepository.create(dados);
  }
}

export const coletaService = new ColetaService();
