import { Router, type Request, type Response } from "express";
import { cargoFuncService } from "../services/cargo_func.services.js";
import { CriarCargoFunc } from "../types/cargo_func.js";

export const cargoFuncRouter = Router();

cargoFuncRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await cargoFuncService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

cargoFuncRouter.post(
  "/",
  async (request: Request<{}, {}, CriarCargoFunc>, response: Response) => {
    try {
      const dados = request.body;

      const cargo = await cargoFuncService.create(dados);

      return response.status(201).json(cargo);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);

cargoFuncRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await cargoFuncService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);
