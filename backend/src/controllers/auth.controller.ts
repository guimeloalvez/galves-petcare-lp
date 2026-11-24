import type { Request, Response } from "express";
import { authService } from "../services/auth.services.js";

class AuthController {
  async login(request: Request, response: Response) {
    try {
      const { email, senha } = request.body;

      if (!email || !senha) {
        return response
          .status(400)
          .json({ error: "E-mail e senha são obrigatórios." });
      }

      const resultado = await authService.login(email, senha);
      return response.json(resultado);
    } catch (error: any) {
      console.error(error);

      if (
        error.message.includes("invalidas") ||
        error.message.includes("inválidas")
      ) {
        return response.status(401).json({ error: error.message });
      }
      return response.status(500).json({ error: "Erro interno no servidor" });
    }
  }
}

export const authController = new AuthController();
