import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config({path: "./.env"})

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
});