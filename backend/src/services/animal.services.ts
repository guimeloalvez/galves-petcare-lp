import { pool } from "../databse/connection.js";
import { Animal, CriarAnimal } from "../types/animal.js";

class AnimalService {
  async getAll(): Promise<Animal[]> {
    const res = await pool.query<Animal>("SELECT * FROM animais");
    return res.rows;
  }

  async getById(id: string): Promise<Animal[]> {
    const res = await pool.query<Animal>(
      "SELECT * FROM animais WHERE id = \$1",
      [id],
    );
    return res.rows;
  }

  async create(dados: CriarAnimal): Promise<Animal> {
    const res = await pool.query<Animal>(
      `INSERT INTO animais (nome, especie, raca, idade, pet_dono_id) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [dados.nome, dados.especie, dados.raca, dados.idade, dados.pet_dono_id],
    );

    const animal = res.rows[0];
    if (!animal) throw new Error("Erro ao cadastrar animal");
    return animal;
  }

  async excluirAnimal(id: string): Promise<boolean> {
    const res = await pool.query("DELETE FROM animais WHERE id = \$1", [id]);
    return (res.rowCount ?? 0) > 0;
  }
}

export const animalService = new AnimalService();
