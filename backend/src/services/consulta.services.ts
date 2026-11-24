import { consultaRepository } from "../repositories/consulta.repository.js";
import type { CriarConsulta } from "../types/consulta.js";

class ConsultaService {
  async getAll() {
    return await consultaRepository.getAll();
  }

  async getById(id: string) {
    return await consultaRepository.getById(id);
  }

  async create(dados: CriarConsulta) {
    return await consultaRepository.create(dados);
  }
}

export const consultaService = new ConsultaService();
