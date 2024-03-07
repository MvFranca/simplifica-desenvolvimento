import { Route, Routes } from "react-router-dom";
import Home from "../pages/inicio/home";
import Aprender from "../pages/aprender/Aprender";
import Jogar from "../pages/jogar/Jogar";
import LoginMobile from "../pages/auth/LoginMobile";
import Registro from "../pages/auth/Cadastro";
import EstudoManual from "../pages/estudoManual/EstudoManual";
import Comunidade from "../pages/comunidade/comunidade";
import Ordenacao from "../pages/ordenacao/Ordenacao";
import Perfil from "../pages/perfil/Perfil.page";
import Ranking from "../pages/ranking/Ranking.page";
import ShowDuvida from "../pages/comunidade/ShowDuvida";
import PageDuvida from "../pages/comunidade/pageDuvida";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/registrar" element={<Registro />} />

        <Route path="/entrar" element={<LoginMobile />} />

        <Route path="/" element={<Home />} />

        <Route path={`/aprender/:id`} element={<Aprender />} />

        <Route path={`/jogar/:id`} element={<Jogar />} />

        <Route path={`/ordenacao/:id`} element={<Ordenacao />} />

        <Route path={`/estudomanual`} element={<EstudoManual />} />

        <Route path={`/comunidade`} element={<Comunidade />} />

        <Route path={`/comunidade/duvida/:id`} element={<ShowDuvida />} />

        <Route path={`/perfil`} element={<Perfil />} />

        <Route path={`/ranking`} element={<Ranking />} />

        <Route path={`/teste`} element={<PageDuvida />} />

        <Route path={`*`} element={<div>página não encontrada - 404</div>} />
      </Routes>
    </>
  );
};

export default Rotas;
