import { Router } from "express";
import { logSistemaController } from "../controllers/log_sistema.controller.js";

export const logSistemaRouter = Router();

logSistemaRouter.get("/", logSistemaController.getAll);
logSistemaRouter.post("/", logSistemaController.create);
logSistemaRouter.get("/:id", logSistemaController.getById);
