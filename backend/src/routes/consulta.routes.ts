import { Router, type Request, type Response } from "express";
import { consultaService } from "../services/consulta.services.js";
import { CriarConsulta } from "../types/consulta.js";

export const consultaRouter = Router();

consultaRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await consultaService.getAll();

    return response.json(res);
  } catch (error) {
    console.error(error);

    return response.status(500).json({
      error: "Erro interno",
    });
  }
});

consultaRouter.post(
  "/",
  async (request: Request<{}, {}, CriarConsulta>, response: Response) => {
    try {
      const dados = request.body;

      const consulta = await consultaService.create(dados);

      return response.status(201).json(consulta);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);

consultaRouter.get(
  "/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
      const res = await consultaService.getById(id);

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  },
);
