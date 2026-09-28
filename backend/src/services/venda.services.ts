import { pool } from "../databse/connection.js";
import { Venda, CriarVenda } from "../types/venda.js";

class VendaService {
  async getAll(): Promise<Venda[]> {
    const res = await pool.query<Venda>("SELECT * FROM vendas");

    return res.rows;
  }

  async getById(id: string): Promise<Venda[]> {
    const res = await pool.query<Venda>("SELECT * FROM vendas WHERE id = $1", [
      id,
    ]);

    return res.rows;
  }

  async create(dados: CriarVenda): Promise<Venda> {
    const res = await pool.query<Venda>(
      `INSERT INTO vendas
        (id_item, id_funcionario, id_cliente)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [dados.id_item, dados.id_funcionario, dados.id_cliente],
    );

    const venda = res.rows[0];

    if (!venda) {
      throw new Error("O banco não retornou a venda cadastrada");
    }

    return venda;
  }
}

export const vendaService = new VendaService();
