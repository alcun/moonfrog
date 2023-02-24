import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";

const BlogCard = ({ postTitle, coverPhoto, postText, slug }) => {
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} href={`/posts/${slug}`}>
        <Image fill src={coverPhoto.url} />
      </Link>
      <div className={styles.card__lower}>
        <h1 className={styles.card__lower__title}> {postTitle}</h1>
        <span className={styles.card__lower__text}>{postText}</span>
      </div>
    </div>
  );
};

export default BlogCard;
