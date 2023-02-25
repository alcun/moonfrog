import React from "react";
import styles from "@/styles/Footer.module.scss";
import { IconContext } from "react-icons";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title}>
        {" "}
        <h1>Moonfrog</h1>
      </div>
      <ul className={styles.footer__links}>
        <IconContext.Provider value={{ className: "social-icons" }}>
          <li>
            <RxCalendar />
          </li>
          <li>
            <RiFacebookCircleLine />
          </li>
          <li>
            <RiInstagramLine />
          </li>
          <li>
            <RiMailSendLine />
          </li>
        </IconContext.Provider>
      </ul>
    </footer>
  );
};

export default Footer;
