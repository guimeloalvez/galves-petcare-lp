import type { Request, Response } from "express";
import { estoqueService } from "../services/estoque.services.js";
import type { CriarEstoque } from "../types/estoque.js";

class EstoqueController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await estoqueService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarEstoque>, response: Response) {
    try {
      const dados = request.body;

      const estoque = await estoqueService.create(dados);

      return response.status(201).json(estoque);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async getById(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;

    try {
      const res = await estoqueService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const estoqueController = new EstoqueController();
