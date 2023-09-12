import { Route, Routes } from "react-router-dom"
import LoginMobile from "../pages/auth/LoginMobile"
import Registro from "../pages/auth/Cadastro"
import Inicio from "../pages/home/Inicio"

const Rotas = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/registrar" element={<Registro/>}/>
            <Route path="/entrar" element={<LoginMobile/>} />
        </Routes>
        </>
    )
}

export default Rotas
