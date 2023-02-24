import React from 'react'
import styles from "@/styles/Header.module.scss";
import Link from 'next/link';


const Header = () => {
  return (
    <div className={styles.header}>

        <Link href={'/'}>Moonfrog</Link>
    </div>
  )
}

export default Header