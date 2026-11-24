import { Router } from "express";
import { frotaController } from "../controllers/frota.controller.js";

export const frotaRouter = Router();

frotaRouter.get("/", frotaController.getAll);
frotaRouter.post("/", frotaController.create);
frotaRouter.get("/:id", frotaController.getById);
