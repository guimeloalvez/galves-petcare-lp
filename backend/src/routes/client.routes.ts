import { Router } from "express";
import { clienteController } from "../controllers/cliente.controller.js";

export const clienteRouter = Router();

clienteRouter.get("/", clienteController.getAll);
clienteRouter.post("/", clienteController.create);
clienteRouter.get("/:id", clienteController.getById);
clienteRouter.patch("/inativar/:id", clienteController.inativar);
