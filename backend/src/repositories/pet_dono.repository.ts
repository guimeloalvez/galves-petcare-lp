import { db } from "../databse/knex.js";
import type { PetDono, CriarPetDono } from "../types/pet_dono.js";

class PetDonoRepository {
  async getAll(): Promise<PetDono[]> {
    return await db("pet_dono").select("*");
  }

  async getById(id: string): Promise<PetDono[]> {
    return await db("pet_dono").where({ id }).select("*");
  }

  async create(dados: CriarPetDono): Promise<PetDono> {
    const [registro] = await db("pet_dono").insert({ id_animal: dados.id_animal, id_cliente: dados.id_cliente }).returning("*");
    if (!registro) throw new Error("Erro ao cadastrar registro");
    return registro;
  }
}

export const petDonoRepository = new PetDonoRepository();
