import type { Request, Response } from "express";
import { clientService } from "../services/client.services.js";
import type { CriarCliente } from "../types/cliente.js";

class ClienteController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await clientService.getAll();

      return response.json(res);
    } catch (error) {
      console.log(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  }

  async create(request: Request<{}, {}, CriarCliente>, response: Response) {
    try {
      const dados = request.body;

      const cliente = await clientService.create(dados);

      return response.status(201).json(cliente);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  }

  async getById(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;
    try {
      const res = await clientService.getById(id);
      return response.json(res);
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }

  async inativar(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;
    try {
      const res = await clientService.inativarCliente(id);

      return response.json(res);
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        error: "Erro interno",
      });
    }
  }
}

export const clienteController = new ClienteController();
