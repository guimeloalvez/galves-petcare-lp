import { animalRepository } from "../repositories/animal.repository.js";
import type { CriarAnimal } from "../types/animal.js";

class AnimalService {
  async getAll() {
    return await animalRepository.getAll();
  }

  async getById(id: string) {
    return await animalRepository.getById(id);
  }

  async create(dados: CriarAnimal) {
    return await animalRepository.create(dados);
  }

  async excluirAnimal(id: string) {
    return await animalRepository.excluirAnimal(id);
  }
}

export const animalService = new AnimalService();
