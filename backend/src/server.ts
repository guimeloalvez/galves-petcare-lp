import express, { response, type Request, type Response } from "express";
import { clienteRouter } from "./routes/client.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/health", (_request: Request, response: Response) => {
  return response.json({
    status: "ok",
  });
});

app.use("/cliente", clienteRouter);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
