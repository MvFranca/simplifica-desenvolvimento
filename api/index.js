import express from "express"
import userRouter from "./routes/user.js"
import authRouter from "./routes/auth.js"
import bodyParser from "body-parser"

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/api/users/", userRouter)
app.use("/api/auth/", authRouter)

app.listen(8000, ()=>{
    console.log("Rodando na 8000");
});
