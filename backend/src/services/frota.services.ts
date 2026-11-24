import { frotaRepository } from "../repositories/frota.repository.js";
import type { CriarFrota } from "../types/frota.js";

class FrotaService {
  async getAll() {
    return await frotaRepository.getAll();
  }

  async getById(id: string) {
    return await frotaRepository.getById(id);
  }

  async create(dados: CriarFrota) {
    return await frotaRepository.create(dados);
  }
}

export const frotaService = new FrotaService();
