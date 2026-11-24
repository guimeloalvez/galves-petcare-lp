import type { Request, Response } from "express";
import { servicoService } from "../services/servico.services.js";
import type { CriarServico } from "../types/servico.js";

class ServicoController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await servicoService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarServico>, response: Response) {
    try {
      const dados = request.body;

      const servico = await servicoService.create(dados);

      return response.status(201).json(servico);
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
      const res = await servicoService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const servicoController = new ServicoController();
