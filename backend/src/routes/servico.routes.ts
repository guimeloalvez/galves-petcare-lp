import { Router } from "express";
import { servicoController } from "../controllers/servico.controller.js";

export const servicoRouter = Router();

servicoRouter.get("/", servicoController.getAll);
servicoRouter.post("/", servicoController.create);
servicoRouter.get("/:id", servicoController.getById);
