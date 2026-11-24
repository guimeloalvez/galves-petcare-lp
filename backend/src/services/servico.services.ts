import { servicoRepository } from "../repositories/servico.repository.js";
import type { CriarServico } from "../types/servico.js";

class ServicoService {
  async getAll() {
    return await servicoRepository.getAll();
  }

  async getById(id: string) {
    return await servicoRepository.getById(id);
  }

  async create(dados: CriarServico) {
    return await servicoRepository.create(dados);
  }
}

export const servicoService = new ServicoService();
