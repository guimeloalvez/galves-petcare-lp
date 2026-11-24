import { cargoFuncRepository } from "../repositories/cargo_func.repository.js";
import type { CriarCargoFunc } from "../types/cargo_func.js";

class CargoFuncService {
  async getAll() {
    return await cargoFuncRepository.getAll();
  }

  async getById(id: string) {
    return await cargoFuncRepository.getById(id);
  }

  async create(dados: CriarCargoFunc) {
    return await cargoFuncRepository.create(dados);
  }
}

export const cargoFuncService = new CargoFuncService();
