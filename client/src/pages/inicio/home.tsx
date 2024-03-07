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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import IconDiamond from "../../components/icons/IconDiamond";

export default function Home() {


  const router = useNavigate();

  const { teste , pontos, setPontos } = useContext(pointContext);

  const notify = (dimas:number) => toast(`Parabéns! Agora você tem ${dimas} diamantes!`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });



  useEffect(() => {

    if(teste.current){
      notify(pontos)
      console.log("entrei papai")
      teste.current = false
    }

  }, [pontos])



  useEffect(() => {
    const value = localStorage.getItem("simplifica:token");
    if (!value) router("/entrar");
  }, [router]);

  

  useEffect(() => {
    const user = localStorage.getItem("simplifica:user")!;
    const userObject = JSON.parse(user);

    const idUser = Number(userObject.id_usuario);

    console.log("pontuação sendo atualizada: ")
    console.log(pontos)

    if(!teste.current){
    axios
      .post("https://simplifica-desenvolvimento.onrender.com/api/points/diamantes", { idUser })
      .then((res) => {
        const pontuacao = res.data.data.resposta;
        setPontos(pontuacao.pontuacao);
        console.log(res)
      })

      .catch((err) => {
        console.log(err);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pontos]);

 
  return (
    <div className={styles.container}>
      <Header />
      <MenuTopo />
      <TrilhaeInfo />
      <MenuMobile />
      <ToastContainer 
      
      />

    </div>
  );
}
