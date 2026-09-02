import express, {
  response,
  Router,
  type Request,
  type Response,
} from "express";
import { clientService } from "../services/client.services.js";

export const clinetRouter = Router();

clinetRouter.get("/", async (_request: Request, response: Response) => {
  try {
    const res = await clientService.getAll();

    response.json(res);
  } catch (error) {
    console.log(error);
  }
});
