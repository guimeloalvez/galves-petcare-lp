import { aumigoRepository } from "../repositories/aumigo.repository.js";
import type { CriarAumigo } from "../types/aumigo.js";

class AumigoService {
  async getAll() {
    return await aumigoRepository.getAll();
  }

  async getById(id: string) {
    return await aumigoRepository.getById(id);
  }

  async create(dados: CriarAumigo) {
    return await aumigoRepository.create(dados);
  }
}

export const aumigoService = new AumigoService();
