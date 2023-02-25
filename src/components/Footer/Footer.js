import React from "react";
import styles from "@/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title}> <h1 >Moonfrog</h1><span>Copyright 2022 </span></div>
      <ul className={styles.footer__links}>
        <li>fb</li>
        <li>insta</li>
        <li>mail</li>

      </ul>
    </footer>
  );
};

export default Footer;
