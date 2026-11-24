import type { Request, Response } from "express";
import { vendaService } from "../services/venda.services.js";
import type { CriarVenda } from "../types/venda.js";

class VendaController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await vendaService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarVenda>, response: Response) {
    try {
      const dados = request.body;

      const venda = await vendaService.create(dados);

      return response.status(201).json(venda);
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
      const res = await vendaService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const vendaController = new VendaController();
