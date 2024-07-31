'use client';

import TrilhaeInfo from '../../components/trilhaInfo/TrilhaeInfo';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { pointContext } from '../../context/context';
import { toast } from 'react-toastify';
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
    const fetchPontuacao = async (idUser: number) => {
      console.log('entrou');

      const { data } = await api.get(`/points/user/${idUser}/pontuacao`);

      const pontuacao = data.data;
      setPontos(pontuacao.pontuacao);
      setFogo(pontuacao.fogo);
    };

    if (!teste.current && user) {
      const idUser = Number(userObject.id);

      fetchPontuacao(idUser);
    }
  }, [setFogo, setPontos, teste, user, userObject]);

  useEffect(() => {
    const fetchProgresso = async (idUser: number) => {
      const { data } = await api.get(`/content/user/${idUser}/progresso`);
      const resposta = data.data;

      setMyProgress(resposta.conteudoId);
      setProgressoBotoes(resposta.avanco);
    };

    if (!teste.current && user) {
      const idUser = Number(userObject.id);

      fetchProgresso(idUser);
    }
  }, [user]);

  return (
      <TrilhaeInfo />
  );
}
