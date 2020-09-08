import React from "react";
import styles from "./Footer.module.css";
import styleIcon from "../Common/LinkIcon.module.css";
import { LinkIcon } from "../Common/LinkIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { contact as contactData } from "../../assets/data/contact";

export const Footer = () => {
  const { linkedin, github, phone, email } = contactData;

  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <section className={styles.item}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <p>Call</p>
          <p>{phone}</p>
        </section>
        <section className={styles.item}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <p>Email</p>
          <p>{email}</p>
        </section>
        <section className={styles.item}>
          <FontAwesomeIcon icon={faPlus} className={styles.icon} />
          <p>Encontre-me</p>
          <p>
            <LinkIcon
              href={linkedin}
              icon={faLinkedin}
              style={styleIcon.small}
            />
            <LinkIcon href={github} icon={faGithub} style={styleIcon.small} />
          </p>
        </section>
        <section
          className={styles.item}
        >
          <FontAwesomeIcon icon={faCopyright} className={styles.icon} />
          <p>Realizado por</p>
          <p>@mariocelsodev</p>
        </section>
      </section>
    </footer>
  );
};
