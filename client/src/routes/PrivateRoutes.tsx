import { useEffect, useContext } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/inicio/home";
import Aprender from "../pages/aprender/Aprender";
import Jogar from "../pages/jogar/Jogar";
import EstudoManual from "../pages/estudoManual/EstudoManual";
import Comunidade from "../pages/comunidade/comunidade";
import axios from "axios";

import { pointContext } from "../context/context";

const PrivateRoutes = () => {
  const router = useNavigate();
  const { userId, setPontos } = useContext(pointContext);


  useEffect(() => {
    axios
      .post("https://simplifica-desenvolvimento.onrender.com/api/points/diamantes", { userId })
      .then((res) => {
        const pontuacao = res.data.data.resposta.pontuacao;
        setPontos(pontuacao);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  useEffect(() => {
    const value = localStorage.getItem("simplifica:token");
    if (!value) router("/entrar");
  }, [router]);

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path={`/aprender/:id`} element={<Aprender />} />

        <Route path={`/jogar/:id`} element={<Jogar />} />

        <Route path={`/estudomanual`} element={<EstudoManual />} />

        <Route path={`/comunidade`} element={<Comunidade />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
