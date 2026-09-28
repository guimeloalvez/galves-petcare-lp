import { Router, type Request, type Response } from "express";
import { logSistemaService } from "../services/log_sistema.services.js";
import { CriarLogSistema } from "../types/log_sistema.js";

export const logSistemaRouter = Router();

logSistemaRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await logSistemaService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

logSistemaRouter.post(
  "/",
  async (request: Request<{}, {}, CriarLogSistema>, response: Response) => {
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
  },
);

logSistemaRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
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
  },
);
