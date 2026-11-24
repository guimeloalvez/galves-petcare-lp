import { registroPontoRepository } from "../repositories/registro_ponto.repository.js";
import type { CriarRegistroPonto } from "../types/registro_ponto.js";

class RegistroPontoService {
  async getAll() {
    return await registroPontoRepository.getAll();
  }

  async getById(id: string) {
    return await registroPontoRepository.getById(id);
  }

  async create(dados: CriarRegistroPonto) {
    return await registroPontoRepository.create(dados);
  }
}

export const registroPontoService = new RegistroPontoService();
