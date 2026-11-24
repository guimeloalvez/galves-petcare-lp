import { estoqueRepository } from "../repositories/estoque.repository.js";
import type { CriarEstoque } from "../types/estoque.js";

class EstoqueService {
  async getAll() {
    return await estoqueRepository.getAll();
  }

  async getById(id: string) {
    return await estoqueRepository.getById(id);
  }

  async create(dados: CriarEstoque) {
    return await estoqueRepository.create(dados);
  }
}

export const estoqueService = new EstoqueService();
