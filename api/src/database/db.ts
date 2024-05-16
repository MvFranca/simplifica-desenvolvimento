import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;

dotenv.config({ path: "./.env" });

export async function connect() {
  console.log("criou o pool de conexão");

  if (global.connection) return global.connection.connect();

  const db = new Pool({
    user: process.env.DB_USER_POSTGRESS,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST_POSTGRESS,
    port: parseInt(process.env.DB_PORT_POSTGRESS || "5432"),
    database: process.env.DB,
  });

  const client = await db.connect();
  console.log("criou o pool de conexão");

  // const res = await client.query("select * from questoes");
  // console.log(res.rows[0]);
  client.release();

  global.connection = db;

  return db.connect();
}
