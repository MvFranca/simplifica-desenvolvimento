"use client";

import styles from "../../styles/home/page.module.css";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import TrilhaeInfo from "../../components/trilhaInfo/TrilhaeInfo";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import Header from "../../components/header/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()

  useEffect(() => {
    const value = localStorage.getItem('simplifica:token')
    console.log(value)
    if(!value) navigate('/entrar')
    
  }, [])


  return (
    <div className={styles.container}>
      <Header />
      <MenuTopo />
      <TrilhaeInfo />
      <MenuMobile />
    </div>
  );
}
