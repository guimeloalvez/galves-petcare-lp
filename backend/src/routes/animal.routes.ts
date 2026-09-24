import { Router, type Request, type Response } from "express";
import { animalService } from "../services/animal.services.js";
import { CriarAnimal } from "../types/animal.js";

export const animalRouter = Router();

animalRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await animalService.getAll();
    return response.json(res);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Erro Interno" });
  }
});

animalRouter.post(
  "/",
  async (request: Request<{}, {}, CriarAnimal>, response: Response) => {
    try {
      const animal = await animalService.create(request.body);
      return response.status(201).json(animal);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro Interno" });
    }
  },
);

animalRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await animalService.getById(request.params.id);
      return response.json(res);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro interno" });
    }
  },
);

animalRouter.delete(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const sucesso = await animalService.excluirAnimal(request.params.id);
      return response.json({ sucesso });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro interno" });
    }
  },
);
