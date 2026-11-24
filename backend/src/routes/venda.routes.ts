import { Router } from "express";
import { vendaController } from "../controllers/venda.controller.js";

export const vendaRouter = Router();

vendaRouter.get("/", vendaController.getAll);
vendaRouter.post("/", vendaController.create);
vendaRouter.get("/:id", vendaController.getById);
