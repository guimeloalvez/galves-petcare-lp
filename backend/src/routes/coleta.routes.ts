import { Router } from "express";
import { coletaController } from "../controllers/coleta.controller.js";

export const coletaRouter = Router();

coletaRouter.get("/", coletaController.getAll);
coletaRouter.post("/", coletaController.create);
coletaRouter.get("/:id", coletaController.getById);
