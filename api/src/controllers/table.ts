import pg from "pg";
const { Client } = pg;


async function consulta(query, func) {
  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST_POSTGRESS,
    port: parseInt(process.env.DB_PORT_POSTGRESS || "5432"),
    database: process.env.DB,
  });
  await conn.connect();
  
  await conn.query(query, func);
  
  return conn;
}



export const FullUsers = async (req: Request, res: Response) => {

    await consulta(
      "SELECT * from usuario",
      async (error, data) => {
        if (error) {
          console.log(error);
  
          return res
            .status(500)
            .json({ msg: "Servidor indisponível. Tente novamente mais tarde." });
        } else {
          const resposta = await data.rows[0].pontuacao;
  
          return res.status(200).json({
            msg: "Pontos atualizados!",
            data: { resposta },
          });
        }
      }
    );
  };
  