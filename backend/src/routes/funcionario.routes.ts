import { Router, type Request, type Response } from "express";
import { funcionarioService } from "../services/funcionario.services.js";
import { CriarFuncionario } from "../types/funcionario.js";

export const funcionarioRouter = Router();

funcionarioRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await funcionarioService.getAll();
    return response.json(res);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Erro Interno" });
  }
});

funcionarioRouter.post(
  "/",
  async (request: Request<{}, {}, CriarFuncionario>, response: Response) => {
    try {
      const funcionario = await funcionarioService.create(request.body);
      return response.status(201).json(funcionario);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro Interno" });
    }
  },
);

funcionarioRouter.patch(
  "/inativar/:id",
  async (request: Request<{ id: string }>, response: Response) => {
    try {
      const res = await funcionarioService.inativarFuncionario(
        request.params.id,
      );
      return response.json({ atualizado: res });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro interno" });
    }
  },
);
