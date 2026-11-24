import { clientRepository } from "../repositories/cliente.repository.js";
import type { CriarCliente } from "../types/cliente.js";

class ClienteService {
  async getAll() {
    return await clientRepository.getAll();
  }

  async getById(id: string) {
    return await clientRepository.getById(id);
  }

  async create(dados: CriarCliente) {
    return await clientRepository.create(dados);
  }

  async inativarCliente(id: string) {
    return await clientRepository.inativarCliente(id);
  }
}

export const clientService = new ClienteService();
