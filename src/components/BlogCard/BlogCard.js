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
        <div>
          <h1> {postTitle}</h1>
        </div>
        <div> {postText}</div>
      </div>
    </div>
  );
};

export default BlogCard;
