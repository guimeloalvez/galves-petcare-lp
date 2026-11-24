import { Router } from "express";
import { aumigoController } from "../controllers/aumigo.controller.js";

export const aumigoRouter = Router();

aumigoRouter.get("/", aumigoController.getAll);
aumigoRouter.post("/", aumigoController.create);
aumigoRouter.get("/:id", aumigoController.getById);
