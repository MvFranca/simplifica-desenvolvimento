"use client";

import styles from "../../styles/home/page.module.css";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import TrilhaeInfo from "../../components/trilhaInfo/TrilhaeInfo";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import Header from "../../components/header/Header";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { pointContext } from "../../context/context";

export default function Home() {
  const router = useNavigate();
  const { setPontos } = useContext(pointContext);

  useEffect(() => {
    const user = localStorage.getItem("simplifica:user")!;
    const userObject = JSON.parse(user);

    const idUser = Number(userObject.id_usuario);
    axios
      .post("http://localhost:8000/api/points/diamantes", { idUser })
      .then((res) => {
        const pontuacao = res.data.data.resposta;
        console.log("antes: ", pontuacao)
        setPontos(pontuacao);
        console.log("\NDEPOIS: ", pontuacao)
      })

      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const value = localStorage.getItem("simplifica:token");

    if (!value) router("/entrar");
  }, [router]);

  return (
    <div className={styles.container}>
      <Header />
      <MenuTopo />
      <TrilhaeInfo />
      <MenuMobile />
    </div>
  );
}
