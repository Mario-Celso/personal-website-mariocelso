import React from "react";
import styles from "./Main.module.css";
import { Home } from "./Home/Home";
import { Resume } from "./Resume/Resume";
import { Contact } from "./Contact/Contact";
import { Route } from "react-router-dom";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Route path="/" exact component={Home} />
      <Route path="/resume/" component={Resume} />
      <Route path="/contact/" component={Contact} />
    </main>
  );
};
