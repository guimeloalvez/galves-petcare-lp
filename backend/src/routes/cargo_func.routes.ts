import { Router } from "express";
import { cargoFuncController } from "../controllers/cargo_func.controller.js";

export const cargoFuncRouter = Router();

cargoFuncRouter.get("/", cargoFuncController.getAll);
cargoFuncRouter.post("/", cargoFuncController.create);
cargoFuncRouter.get("/:id", cargoFuncController.getById);
