import React from "react";
import styles from "./Home.module.css";
import { RoundButton } from "./RoundButton";
import { contact as contactData } from "../../../assets/data/contact";

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.avatar}>
        <img src={contactData.avatar.src} alt={contactData.avatar.alt} />
      </div>
      <section className={styles.hello}>
        <p>Quem sou?</p>
      </section>
      <section className={styles.button_group}>
        <RoundButton text="Resumo" target="nav_resume" />
        <RoundButton text="Skills" target="nav_resume" />
        <RoundButton text="Contato" target="nav_contact" />
      </section>
      <p className={styles.intro}>
        Sou um apaixonado por tecnologia, desenvolvedor FullStack  
        !
        <br />
        <br />
        Tenho como foco desenvolvimento BackEnd, onde me sinto mais à vontade, tenho experiencia com PHP 
        e por curiosidade acabei aprendendo sobre node js.
      </p>
    </section>
  );
};
