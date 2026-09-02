import express, { response, type Request, type Response } from "express";
import { randomUUID } from "node:crypto";
import { pool } from "./databse/connection.js";
import { clinetRouter } from "./routes/client.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/health", (_request: Request, response: Response) => {
  return response.json({
    status: "ok",
  });
});

interface CreateUserBody {
  name: string;
}

app.post(
  "/users",
  (request: Request<object, object, CreateUserBody>, response: Response) => {
    const name = request.body.name?.trim();
    if (!name) {
      return response.status(400).json({
        error: "Name is required",
      });
    }

    return response.status(201).json({
      id: randomUUID(),
      name,
    });
  },
);

app.use("/cliente", clinetRouter);

interface CreateUserBody {
  name: string;
}

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
