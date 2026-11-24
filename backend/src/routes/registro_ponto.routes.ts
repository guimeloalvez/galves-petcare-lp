import { Router } from "express";
import { registroPontoController } from "../controllers/registro_ponto.controller.js";

export const registroPontoRouter = Router();

registroPontoRouter.get("/", registroPontoController.getAll);
registroPontoRouter.post("/", registroPontoController.create);
registroPontoRouter.get("/:id", registroPontoController.getById);
