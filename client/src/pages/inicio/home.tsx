'use client';

import styles from '../../styles/home/page.module.css';
import TrilhaeInfo from '../../components/trilhaInfo/TrilhaeInfo';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { pointContext } from '../../context/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../services/api';

export default function Home() {
  const user = localStorage.getItem('simplifica:user')!;
  const userObject = JSON.parse(user);

  const router = useNavigate();

  const { teste, fogo, setPontos, setFogo, setMyProgress, setProgressoBotoes } =
    useContext(pointContext);

  const notify = (dimas: number) =>
    toast(`Parabéns! Agora você tem ${dimas} Fires!`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  useEffect(() => {
    if (teste.current) {
      notify(fogo);
      teste.current = false;
    }
  }, [fogo]);

  useEffect(() => {
    const value = localStorage.getItem('simplifica:token');
    if (!value) router('/entrar');
  }, [router]);

  useEffect(() => {
    if (!teste.current && user) {
      const idUser = Number(userObject.id);

      api
        .get(`/points/user/${idUser}/pontuacao`)
        .then((res) => {
          const pontuacao = res.data.data;
          setPontos(pontuacao.pontuacao);
          setFogo(pontuacao.fogo);
          console.log(res);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, [setFogo, setPontos, teste, user, userObject]);

  useEffect(() => {
    if (!teste.current && user) {
      const idUser = Number(userObject.id);

      api
        .get(`/content/user/${idUser}/progresso`)
        .then((res) => {
          const resposta = res.data.data;
          console.log('resposta:');
          console.log(resposta);
          setMyProgress(resposta.conteudoId);
          setProgressoBotoes(resposta.avanco);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <TrilhaeInfo />
      <ToastContainer />
    </div>
  );
}
