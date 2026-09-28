import { Router, type Request, type Response } from "express";
import { servicoService } from "../services/servico.services.js";
import { CriarServico } from "../types/servico.js";

export const servicoRouter = Router();

servicoRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await servicoService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

servicoRouter.post(
  "/",
  async (request: Request<{}, {}, CriarServico>, response: Response) => {
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
  },
);

servicoRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
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
  },
);
