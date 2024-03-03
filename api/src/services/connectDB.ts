import { Client } from "pg";

export async function getClient() {
    const conn = new Client({
      user: process.env.DB_USER_POSTGRESS,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST_POSTGRESS,
      port: parseInt(process.env.DB_PORT_POSTGRESS || "5432"),
      database: process.env.DB,
    });
  
    await conn.connect();
    return conn;
  }
  