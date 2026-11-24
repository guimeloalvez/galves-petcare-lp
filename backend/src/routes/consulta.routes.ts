import { Router } from "express";
import { consultaController } from "../controllers/consulta.controller.js";

export const consultaRouter = Router();

consultaRouter.get("/", consultaController.getAll);
consultaRouter.post("/", consultaController.create);
consultaRouter.get("/:id", consultaController.getById);
