import { Router, type Request, type Response } from "express";
import { petDonoService } from "../services/pet_dono.services.js";
import { CriarPetDono } from "../types/pet_dono.js";

export const petDonoRouter = Router();

petDonoRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await petDonoService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

petDonoRouter.post(
  "/",
  async (request: Request<{}, {}, CriarPetDono>, response: Response) => {
    try {
      const dados = request.body;

      const petDono = await petDonoService.create(dados);

      return response.status(201).json(petDono);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);

petDonoRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await petDonoService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);
