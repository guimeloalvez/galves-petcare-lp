import express, { response, type Request, type Response } from "express";
import { clienteRouter } from "./routes/client.routes.js";
import { funcionarioRouter } from "./routes/funcionario.routes.js";
import { animalRouter } from "./routes/animal.routes.js";
import { cargoFuncRouter } from "./routes/cargo_func.routes.js";
import { frotaRouter } from "./routes/frota.routes.js";
import { parceiroRouter } from "./routes/parceiro.routes.js";
import { servicoRouter } from "./routes/servico.routes.js";
import { aumigoRouter } from "./routes/aumigo.routes.js";
import { petDonoRouter } from "./routes/pet_dono.routes.js";
import { registroPontoRouter } from "./routes/registro_ponto.routes.js";
import { coletaRouter } from "./routes/coleta.routes.js";
import { estoqueRouter } from "./routes/estoque.routes.js";
import { logSistemaRouter } from "./routes/log_sistema.routes.js";
import { vendaRouter } from "./routes/venda.routes.js";
import { consultaRouter } from "./routes/consulta.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/health", (_request: Request, response: Response) => {
  return response.json({
    status: "ok",
  });
});

app.use("/cliente", clienteRouter);

app.use("/funcionario", funcionarioRouter);

app.use("/animal", animalRouter);

app.use("/cargo-func", cargoFuncRouter);

app.use("/frota", frotaRouter);

app.use("/parceiro", parceiroRouter);

app.use("/servico", servicoRouter);

app.use("/aumigo", aumigoRouter);

app.use("/pet-dono", petDonoRouter);

app.use("/registro-ponto", registroPontoRouter);

app.use("/coleta", coletaRouter);

app.use("/estoque", estoqueRouter);

app.use("/log-sistema", logSistemaRouter);

app.use("/venda", vendaRouter);

app.use("/consulta", consultaRouter);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
