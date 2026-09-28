import { Router, type Request, type Response } from "express";
import { parceiroService } from "../services/parceiro.services.js";
import { CriarParceiro } from "../types/parceiro.js";

export const parceiroRouter = Router();

parceiroRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await parceiroService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

parceiroRouter.post(
  "/",
  async (request: Request<{}, {}, CriarParceiro>, response: Response) => {
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
  },
);

parceiroRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
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
  },
);
