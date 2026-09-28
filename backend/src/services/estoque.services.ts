import { pool } from "../databse/connection.js";
import { Estoque, CriarEstoque } from "../types/estoque.js";

class EstoqueService {
  async getAll(): Promise<Estoque[]> {
    const res = await pool.query<Estoque>("SELECT * FROM estoque");

    return res.rows;
  }

  async getById(id: string): Promise<Estoque[]> {
    const res = await pool.query<Estoque>(
      "SELECT * FROM estoque WHERE id = $1",
      [id],
    );

    return res.rows;
  }

  async create(dados: CriarEstoque): Promise<Estoque> {
    const res = await pool.query<Estoque>(
      `INSERT INTO estoque
        (nome, descricao, quantidade, valor, dt_validade)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        dados.nome,
        dados.descricao,
        dados.quantidade,
        dados.valor,
        dados.dt_validade,
      ],
    );

    const estoque = res.rows[0];

    if (!estoque) {
      throw new Error("O banco não retornou o item de estoque cadastrado");
    }

    return estoque;
  }
}

export const estoqueService = new EstoqueService();
