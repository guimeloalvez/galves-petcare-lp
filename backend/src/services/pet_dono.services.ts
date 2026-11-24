import { petDonoRepository } from "../repositories/pet_dono.repository.js";
import type { CriarPetDono } from "../types/pet_dono.js";

class PetDonoService {
  async getAll() {
    return await petDonoRepository.getAll();
  }

  async getById(id: string) {
    return await petDonoRepository.getById(id);
  }

  async create(dados: CriarPetDono) {
    return await petDonoRepository.create(dados);
  }
}

export const petDonoService = new PetDonoService();
