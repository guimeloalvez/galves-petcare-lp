import type { Request, Response } from "express";
import { animalService } from "../services/animal.services.js";
import type { CriarAnimal } from "../types/animal.js";

class AnimalController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await animalService.getAll();
      return response.json(res);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro Interno" });
    }
  }

  async create(request: Request<{}, {}, CriarAnimal>, response: Response) {
    try {
      const animal = await animalService.create(request.body);
      return response.status(201).json(animal);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro Interno" });
    }
  }

  async getById(request: Request<{ id: string }>, response: Response) {
    try {
      const res = await animalService.getById(request.params.id);
      return response.json(res);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro interno" });
    }
  }

  async delete(request: Request<{ id: string }>, response: Response) {
    try {
      const sucesso = await animalService.excluirAnimal(request.params.id);
      return response.json({ sucesso });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro interno" });
    }
  }
}

export const animalController = new AnimalController();
