"use client";

import styles from "../../styles/home/page.module.css";
import TrilhaeInfo from "../../components/trilhaInfo/TrilhaeInfo";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { pointContext } from "../../context/context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import IconDiamond from "../../components/icons/IconDiamond";

export default function Home() {

  const user = localStorage.getItem("simplifica:user")!;
  const userObject = JSON.parse(user);


  const router = useNavigate();

  const { teste , fogo, pontos, setPontos, setFogo, setMyProgress, setProgressoBotoes} = useContext(pointContext);

  const notify = (dimas:number) => toast(`Parabéns! Agora você tem ${dimas} Fires!`, {
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
      notify(fogo)
      teste.current = false
    }

  }, [fogo])



  useEffect(() => {
    const value = localStorage.getItem("simplifica:token");
    if (!value) router("/entrar");
  }, [router]);

  

  useEffect(() => {
   
    const idUser = Number(userObject.id_usuario);

    if(!teste.current && user){
    axios
      .get(`http://localhost:8000/api/points/pontuacao?idUser=${idUser}`)
      .then((res) => {
        const pontuacao = res.data.data.resposta;
        setPontos(pontuacao.pontuacao);
        setFogo(pontuacao.fogo);
        console.log(res)
      })

      .catch((err) => {
        console.log(err);
      });
    }



    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fogo,pontos, user]);

  useEffect(() => {
    const idUser = Number(userObject.id_usuario);

    if(!teste.current && user){
    axios
      .get(`http://localhost:8000/api/content/getProgress?idUser=${ idUser }`)
      .then((res) => {
        const resposta = res.data.data.resposta;
        setMyProgress(resposta.id_progresso)
        setProgressoBotoes(resposta.avanco)
      })

      .catch((err) => {
        console.log(err);
      });
    }
  }, [user])


 
  return (
    <div className={styles.container}>
      <TrilhaeInfo />
      <ToastContainer 
      
      />

    </div>
  );
}
