import type { Request, Response } from "express";
import { parceiroService } from "../services/parceiro.services.js";
import type { CriarParceiro } from "../types/parceiro.js";

class ParceiroController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await parceiroService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarParceiro>, response: Response) {
    try {
      const dados = request.body;

      const parceiro = await parceiroService.create(dados);

      return response.status(201).json(parceiro);
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
      const res = await parceiroService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const parceiroController = new ParceiroController();
