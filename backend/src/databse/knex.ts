import "dotenv/config";
import Knex from "knex";

export const db = Knex({
  client: "pg",
  connection: {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT || 5432),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  },
  debug: false,
});
