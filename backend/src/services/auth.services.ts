import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "../repositories/auth.repository.js";
import { funcionarioService } from "./funcionarios.services.js";
import { RespostaLogin } from "../types/funcionarios.js";

const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
  async login(email: string, senhaInformada: string): Promise<RespostaLogin> {
    const funcionario = await funcionarioService.getByEmail(email);

    if (!JWT_SECRET) {
      throw new Error("A variável de ambiente JWT_SECRET não foi configurada!");
    }

    if (!funcionario || funcionario.status === "inativo") {
      throw new Error("Credenciais inválidas ou usuário inativo.");
    }

    const senhaValida = await bcrypt.compare(senhaInformada, funcionario.senha);
    if (!senhaValida) {
      throw new Error("Credenciais inválidas.");
    }

    const cargo = await authRepository.getCargo(funcionario.id_cargo);

    if (!cargo) {
      throw new Error("Cargo do funcionário não encontrado.");
    }

    const token = jwt.sign(
      { id: funcionario.id, email: funcionario.email },
      JWT_SECRET,
      { expiresIn: "8h" },
    );

    return {
      nome: funcionario.nome,
      email: funcionario.email,
      cargo: {
        id: cargo.id,
        nome: cargo.nome,
      },
      token: token,
    };
  }
}

export const authService = new AuthService();
