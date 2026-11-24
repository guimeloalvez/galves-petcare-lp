import { parceiroRepository } from "../repositories/parceiro.repository.js";
import type { CriarParceiro } from "../types/parceiro.js";

class ParceiroService {
  async getAll() {
    return await parceiroRepository.getAll();
  }

  async getById(id: string) {
    return await parceiroRepository.getById(id);
  }

  async create(dados: CriarParceiro) {
    return await parceiroRepository.create(dados);
  }
}

export const parceiroService = new ParceiroService();
