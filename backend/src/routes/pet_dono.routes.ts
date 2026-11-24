import { Router } from "express";
import { petDonoController } from "../controllers/pet_dono.controller.js";

export const petDonoRouter = Router();

petDonoRouter.get("/", petDonoController.getAll);
petDonoRouter.post("/", petDonoController.create);
petDonoRouter.get("/:id", petDonoController.getById);
