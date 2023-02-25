import React from "react";
import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <Image width={300} height={300} src={"/logo.png"} />
      </Link>

      <ul>
        <li>words</li>

        <li>nights</li>
        <li>about</li>
      </ul>
    </div>
  );
};

export default Header;
