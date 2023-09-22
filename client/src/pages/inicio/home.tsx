"use client";

import styles from "../../styles/home/page.module.css";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import TrilhaeInfo from "../../components/trilhaInfo/TrilhaeInfo";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import Header from "../../components/header/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const router = useNavigate();

  useEffect(() => {
    
    const value = localStorage.getItem("simplifica:token");
    if (!value) router("/entrar");

  }, [router]);


  return (
    <div className={styles.container}>
      <Header 
      />
      <MenuTopo />
      <TrilhaeInfo />
      <MenuMobile />
    </div>
  );
}
