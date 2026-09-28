import { Router, type Request, type Response } from "express";
import { estoqueService } from "../services/estoque.services.js";
import { CriarEstoque } from "../types/estoque.js";

export const estoqueRouter = Router();

estoqueRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await estoqueService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

estoqueRouter.post(
  "/",
  async (request: Request<{}, {}, CriarEstoque>, response: Response) => {
    try {
      const dados = request.body;

      const estoque = await estoqueService.create(dados);

      return response.status(201).json(estoque);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);

estoqueRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await estoqueService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);
