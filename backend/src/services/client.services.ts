import { pool } from "../databse/connection.js";

class ClienteService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM clientes");

      return res.rows;
    } catch (error) {
      console.log(error);
    }
  }
}

export const clientService = new ClienteService();
