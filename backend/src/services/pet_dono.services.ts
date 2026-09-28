import { pool } from "../databse/connection.js";
import { PetDono, CriarPetDono } from "../types/pet_dono.js";

class PetDonoService {
  async getAll(): Promise<PetDono[]> {
    const res = await pool.query<PetDono>("SELECT * FROM pet_dono");

    return res.rows;
  }

  async getById(id: string): Promise<PetDono[]> {
    const res = await pool.query<PetDono>(
      "SELECT * FROM pet_dono WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarPetDono): Promise<PetDono> {
    const res = await pool.query<PetDono>(
      `INSERT INTO pet_dono
        (id_animal, id_cliente)
       VALUES ($1, $2)
       RETURNING *`,
      [dados.id_animal, dados.id_cliente],
    );

    const petDono = res.rows[0];

    if (!petDono) {
      throw new Error("O banco não retornou o relacionamento cadastrado");
    }

    return petDono;
  }
}

export const petDonoService = new PetDonoService();
