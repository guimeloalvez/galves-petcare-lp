import { error } from "node:console";
import { pool } from "../databse/connection.js";
import { Cliente, CriarCliente } from "../types/cliente.js";

class ClienteService {
  async getAll(): Promise<Cliente[]> {
    const res = await pool.query<Cliente>("SELECT * FROM clientes");

    return res.rows;
  }

  async create(dados: CriarCliente): Promise<Cliente> {
    const res = await pool.query<Cliente>(
      `INSERT INTO clientes 
            (nome, telefone, idade, email) VALUES ($1, $2, $3, $4) RETURNING *`,
      [dados.nome, dados.telefone, dados.idade, dados.email],
    );

    const cliente = res.rows[0];

    if (!cliente) {
      throw new Error("O banco não retornou o cliente cadastrado");
    }

    return cliente;
  }
}

export const clientService = new ClienteService();
