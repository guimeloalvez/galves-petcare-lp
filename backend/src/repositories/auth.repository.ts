import { db } from "../databse/knex.js";

class AuthRepository {
  async getCargo(id: string) {
    return await db("cargo_func").where({ id }).select("id", "nome").first();
  }
}

export const authRepository = new AuthRepository();
