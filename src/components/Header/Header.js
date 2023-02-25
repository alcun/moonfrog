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
        {/* <li>words</li> */}

        <Link href={'/nights'}><li>nights</li></Link>
        <Link href={'/about'}><li>about</li></Link>
      </ul>
    </div>
  );
};

export default Header;
