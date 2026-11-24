import { db } from "../databse/knex.js";
import type { Animal, CriarAnimal } from "../types/animal.js";

class AnimalRepository {
  async getAll(): Promise<Animal[]> {
    return await db("animais").select("*");
  }

  async getById(id: string): Promise<Animal[]> {
    return await db("animais").where({ id }).select("*");
  }

  async create(dados: CriarAnimal): Promise<Animal> {
    const [registro] = await db("animais").insert({ nome: dados.nome, especie: dados.especie, raca: dados.raca, idade: dados.idade, pet_dono_id: dados.pet_dono_id }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }

  async excluirAnimal(id: string): Promise<boolean> {
    return (await db("animais").where({ id }).del()) > 0;
  }
}

export const animalRepository = new AnimalRepository();
