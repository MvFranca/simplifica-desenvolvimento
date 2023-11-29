import pg from "pg";
import dotenv from "dotenv";

const { Client } = pg;
dotenv.config({ path: "./.env" });

async function consulta(query) {
  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: "Malandro123@",
    host: process.env.DB_HOST_POSTGRESS,
    port: process.env.DB_PORT_POSTGRESS,
    database: process.env.DB,
  });
  await conn.connect();

  await conn.query(query);

  return conn;
  // console.log(consulta);
}

export const pointsDiamonds = async (req, res) => {
  const { userId } = req.body;

  const points = await consulta(
    "SELECT pontuacao FROM pontuacaoq WHERE fk_id_usuario = 1"
  );
  console.log("pontos: " + points);
  console.log("meu id:" + userId);
};

export const pointsFire = () => {};
