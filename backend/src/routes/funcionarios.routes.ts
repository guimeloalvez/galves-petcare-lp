import { Router } from "express";
import { funcionarioController } from "../controllers/funcionario.controller.js";

export const funcionarioRouter = Router();

funcionarioRouter.get("/", funcionarioController.getAll);
funcionarioRouter.post("/", funcionarioController.create);
funcionarioRouter.patch("/inativar/:id", funcionarioController.inativar);
