import { Router } from "express";
import { estoqueController } from "../controllers/estoque.controller.js";

export const estoqueRouter = Router();

estoqueRouter.get("/", estoqueController.getAll);
estoqueRouter.post("/", estoqueController.create);
estoqueRouter.get("/:id", estoqueController.getById);
