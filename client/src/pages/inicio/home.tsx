"use client";

import styles from "../../styles/home/page.module.css";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import TrilhaeInfo from "../../components/trilhaInfo/TrilhaeInfo";
import MenuTopo from "../../components/menuTopo/MenuTopo";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <MenuTopo />
      <TrilhaeInfo />
      <MenuMobile />
    </div>
  );
}
