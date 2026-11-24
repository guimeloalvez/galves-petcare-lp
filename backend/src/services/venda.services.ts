import { vendaRepository } from "../repositories/venda.repository.js";
import type { CriarVenda } from "../types/venda.js";

class VendaService {
  async getAll() {
    return await vendaRepository.getAll();
  }

  async getById(id: string) {
    return await vendaRepository.getById(id);
  }

  async create(dados: CriarVenda) {
    return await vendaRepository.create(dados);
  }
}

export const vendaService = new VendaService();
