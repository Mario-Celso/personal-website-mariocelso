import React from "react";
import styles from "./Contact.module.css";


const handleClick = e => {
  e.preventDefault();
  alert(`Ainda não implementado :(`);
};

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <h1>Contate-me</h1>
      <section className={styles.container}>
        <section>
          <p>Envie um email com sujestões e pergutas :)</p>
          <br/>
          <form >
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Assunto" />
            <textarea type="text" placeholder="Mensagem" rows="10" />
            <input type="submit" value="Enviar" onClick={handleClick} />
          </form>
        </section>
      </section>
    </section>
  );
};
