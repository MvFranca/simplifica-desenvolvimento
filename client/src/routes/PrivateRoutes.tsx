import { useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/inicio/home';
import Aprender from '../pages/aprender/Aprender';
import Jogar from '../pages/jogar/Jogar';
import EstudoManual from '../pages/estudoManual/EstudoManual';
import Comunidade from '../pages/comunidade/comunidade';

const PrivateRoutes = () => {
  //* hooks
  const router = useNavigate();

  //* effects
  useEffect(() => {
    const value = localStorage.getItem('simplifica:token');
    if (!value) router('/entrar');
  }, [router]);

  //* render
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
