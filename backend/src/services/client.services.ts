import { pool } from "../databse/connection.js";
import { Cliente } from "../types/cliente.js";

class ClienteService {
  async getAll(): Promise<Cliente[]> {
    const res = await pool.query<Cliente>("SELECT * FROM clientes");

    return res.rows;
  }

  async create(
    nome: string,
    telefone: string,
    idade: number,
    email: string,
  ): Promise<Cliente> {
    const res = await pool.query<Cliente>(
      `INSERT INTO clientes 
            (nome, telefone, idade, email) VALUES ($1, $2, $3, $4) RETURNING *`,
      [nome, telefone, idade, email],
    );

    return res.rows[0];
  }
}

export const clientService = new ClienteService();
