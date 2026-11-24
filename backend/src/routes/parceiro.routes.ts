import { Router } from "express";
import { parceiroController } from "../controllers/parceiro.controller.js";

export const parceiroRouter = Router();

parceiroRouter.get("/", parceiroController.getAll);
parceiroRouter.post("/", parceiroController.create);
parceiroRouter.get("/:id", parceiroController.getById);
