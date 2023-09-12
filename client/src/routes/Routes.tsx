import { Route, Routes } from "react-router-dom"
import LoginMobile from "../pages/autentificacao/LoginMobile"
import Registro from "../pages/autentificacao/Cadastro"
import Home from "../pages/inicio/home"
import Aprender from "../pages/aprender/Aprender"
import Jogar from "../pages/jogar/Jogar"

const Rotas = () => {
    return(
        <>
        <Routes>
            <Route path="/registrar" element={<Registro/>}/>
            <Route path="/entrar" element={<LoginMobile/>} />

            <Route path="/" element={<Home />} />
          <Route path={`/aprender/:id`} element={<Aprender/>}/>     
          <Route path={`/jogar/:id`} element={<Jogar />} /> 
        </Routes>
        </>
    )
}

export default Rotas
