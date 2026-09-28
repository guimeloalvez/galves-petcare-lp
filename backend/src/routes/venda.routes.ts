import { Router, type Request, type Response } from "express";
import { vendaService } from "../services/venda.services.js";
import { CriarVenda } from "../types/venda.js";

export const vendaRouter = Router();

vendaRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await vendaService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

vendaRouter.post(
  "/",
  async (request: Request<{}, {}, CriarVenda>, response: Response) => {
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
  },
);

vendaRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
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
  },
);
