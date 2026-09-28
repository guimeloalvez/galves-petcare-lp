import { Router, type Request, type Response } from "express";
import { registroPontoService } from "../services/registro_ponto.services.js";
import { CriarRegistroPonto } from "../types/registro_ponto.js";

export const registroPontoRouter = Router();

registroPontoRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await registroPontoService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

registroPontoRouter.post(
  "/",
  async (request: Request<{}, {}, CriarRegistroPonto>, response: Response) => {
    try {
      const dados = request.body;

      const registro = await registroPontoService.create(dados);

      return response.status(201).json(registro);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);

registroPontoRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await registroPontoService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);
