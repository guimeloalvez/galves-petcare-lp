import type { Request, Response } from "express";
import { funcionarioService } from "../services/funcionarios.services.js";
import type { CriarFuncionario } from "../types/funcionarios.js";

class FuncionarioController {
  async getAll(_request: Request, response: Response) {
    try {
      const res = await funcionarioService.getAll();
      return response.json(res.map(({ senha, ...funcionario }) => funcionario));
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro Interno" });
    }
  }

  async create(request: Request<{}, {}, CriarFuncionario>, response: Response) {
    try {
      const funcionario = await funcionarioService.create(request.body);
      const { senha, ...dadosPublicos } = funcionario;
      return response.status(201).json(dadosPublicos);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro Interno" });
    }
  }

  async inativar(request: Request<{ id: string }>, response: Response) {
    try {
      const res = await funcionarioService.inativarFuncionario(
        request.params.id,
      );
      return response.json({ atualizado: res });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro interno" });
    }
  }
}

export const funcionarioController = new FuncionarioController();
