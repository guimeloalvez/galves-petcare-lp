import type { Request, Response } from "express";
import { aumigoService } from "../services/aumigo.services.js";
import type { CriarAumigo } from "../types/aumigo.js";

class AumigoController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await aumigoService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarAumigo>, response: Response) {
    try {
      const dados = request.body;

      const aumigo = await aumigoService.create(dados);

      return response.status(201).json(aumigo);
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
      const res = await aumigoService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const aumigoController = new AumigoController();
