import { db } from "../connect.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = (req, res)=>{
    const {username, email, password, confirmPassword, userImg} = req.body

    if(!username) return res.status(422).json({msg: "O nome é obrigatório!"})
    if(!email) return res.status(422).json({msg: "O e-mail é obrigatório!"})
    if(!password) return res.status(422).json({msg: "A senha é obrigatória!"})
    if(password != confirmPassword) return res.status(422).json({msg: "As senhas não são iguais"})
    
    db.query("SELECT email FROM user WHERE email = ?", [email], async(error, data)=>{
        if(error){
            console.log(error)
            return res.status(500).json({msg: "Servidor indisponível. Tente novamente mais tarde.1"})
        }

        if(data.length > 0) return res.status(500).json({msg: "E-mail já existente."})

        else{
            const passwordHash = await bcrypt.hash(password, 8)
            db.query(
                "INSERT INTO user SET ?",{username, email, password: passwordHash, userImg: userImg}, 
                (error)=>{
                    if(error){
                        console.log(error)
                        return res.status(500).json({msg: "Servidor indisponível. Tente novamente mais tarde."})
                    } else{
                        return res.status(200).json({msg: "Cadastro realizado com sucesso!"})
                    }
                }
            )
        }
    })
}

export const login = (req, res)=>{
    const {email, password} = req.body

    db.query(
        "SELECT * FROM user WHERE email = ?", [email], async(error,data) => {
            
            if(error){
                console.log(error)
                return res.status(500).json({msg: "Servidor indisponível. Tente novamente mais tarde."})
            }
            if(data.length === 0){
                return res.status(404).json({msg: "Usuário não encontrado."})
            } else{
                    var user = data[0]


                        const checkPassword = await bcrypt.compare(password, user.password)
                        if(!checkPassword) return res.status(422).json({msg: "Senha incorreta."})
    
                        try {
                            const refreshToken = jwt.sign({
                                exp: Math.floor(Date.now()/1000) + 24 * 60 * 60,
                                id: user.password
                            },
                            process.env.REFRESH,
                            {algorithm: "HS256"}
                            )
                            const token = jwt.sign({
                                exp: Math.floor(Date.now()/1000) + 3600,
                                id: user.password
                            },
                            process.env.TOKEN,
                            {algorithm: "HS256"}
                            )
                            res.status(200).json({msg: "Usuário logado com sucesso!", data:{user, token:{ token, refreshToken}}}
                            
                            )
                        } catch (error) {
                            console.log(error)
                            return res.status(500).json({msg: "Servidor indisponível. Tente novamente mais tarde."})
                        }

                
            }
        }
    )
}