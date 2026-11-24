import type { Request, Response } from "express";
import { frotaService } from "../services/frota.services.js";
import type { CriarFrota } from "../types/frota.js";

class FrotaController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await frotaService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarFrota>, response: Response) {
    try {
      const dados = request.body;

      const frota = await frotaService.create(dados);

      return response.status(201).json(frota);
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
      const res = await frotaService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const frotaController = new FrotaController();
