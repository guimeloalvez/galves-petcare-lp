import type { Request, Response } from "express";
import { logSistemaService } from "../services/log_sistema.services.js";
import type { CriarLogSistema } from "../types/log_sistema.js";

class LogSistemaController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await logSistemaService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarLogSistema>, response: Response) {
    try {
      const dados = request.body;

      const log = await logSistemaService.create(dados);

      return response.status(201).json(log);
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
      const res = await logSistemaService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const logSistemaController = new LogSistemaController();
