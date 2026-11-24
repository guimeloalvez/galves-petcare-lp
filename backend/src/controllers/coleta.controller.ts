import type { Request, Response } from "express";
import { coletaService } from "../services/coleta.services.js";
import type { CriarColeta } from "../types/coleta.js";

class ColetaController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await coletaService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarColeta>, response: Response) {
    try {
      const dados = request.body;

      const coleta = await coletaService.create(dados);

      return response.status(201).json(coleta);
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
      const res = await coletaService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const coletaController = new ColetaController();
