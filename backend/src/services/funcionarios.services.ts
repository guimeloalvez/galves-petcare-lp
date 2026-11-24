import bcrypt from "bcrypt";
import { funcionarioRepository } from "../repositories/funcionario.repository.js";
import type { CriarFuncionario } from "../types/funcionarios.js";

class FuncionarioService {
  async getAll() {
    return await funcionarioRepository.getAll();
  }

  async getById(id: string) {
    return await funcionarioRepository.getById(id);
  }

  async create(dados: CriarFuncionario) {
    const senha = await bcrypt.hash(dados.senha, 10);
    return await funcionarioRepository.create({ ...dados, senha });
  }

  async getByEmail(email: string) {
    return await funcionarioRepository.getByEmail(email);
  }

  async inativarFuncionario(id: string) {
    return await funcionarioRepository.inativarFuncionario(id);
  }
}

export const funcionarioService = new FuncionarioService();
