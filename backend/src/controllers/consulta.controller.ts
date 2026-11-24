import type { Request, Response } from "express";
import { consultaService } from "../services/consulta.services.js";
import type { CriarConsulta } from "../types/consulta.js";

class ConsultaController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await consultaService.getAll();

      return response.json(res);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarConsulta>, response: Response) {
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
  }

  async getById(request: Request<{ id: string }>, response: Response) {
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
  }
}

export const consultaController = new ConsultaController();
