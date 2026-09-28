import { Router, type Request, type Response } from "express";
import { aumigoService } from "../services/aumigo.services.js";
import { CriarAumigo } from "../types/aumigo.js";

export const aumigoRouter = Router();

aumigoRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await aumigoService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

aumigoRouter.post(
  "/",
  async (request: Request<{}, {}, CriarAumigo>, response: Response) => {
    try {
      const dados = request.body;

      const aumigo = await aumigoService.create(dados);

      return response.status(201).json(aumigo);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);

aumigoRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await aumigoService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);
