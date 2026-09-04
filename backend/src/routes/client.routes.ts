import express, {
  response,
  Router,
  type Request,
  type Response,
} from "express";
import { clientService } from "../services/client.services.js";
import { CriarCliente } from "../types/cliente.js";

export const clienteRouter = Router();

clienteRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await clientService.getAll();

    return response.json(res);
  } catch (error) {
    console.log(error);

    return response.status(500).json({
      error: "Erro Interno",
    });
  }
});

clienteRouter.post(
  "/",
  async (request: Request<{}, {}, CriarCliente>, response: Response) => {
    try {
      const { email, idade, nome, telefone } = request.body;
      const cliente = await clientService.create(nome, telefone, idade, email);

      return response.status(201).json(cliente);
    } catch (error) {
      console.error(error);

      return response.status(500).json({
        error: "Erro Interno",
      });
    }
  },
);
