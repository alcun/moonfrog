import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.scss";

const BlogCard = ({
  postTitle,
  coverPhoto,
  postText,
  slug,
  datePublished,
  author,
}) => {
  return (
    <div className={styles.card}>
      <Link className={styles.card__link} href={`/posts/${slug}`}>
        <Image fill src={coverPhoto.url} />
      </Link>
      <div className={styles.card__lower}>
        <h1 className={styles.card__lower__title}> {postTitle}</h1>
       
        <span className={styles.card__lower__text}>
          {postText.replaceAll("\\n", " ")}
        </span>
        <div className={styles.card__lower__info}>
          <div className={styles.card__lower__info__author}>
            <div>
              <Image width={20} height={20} src={author.avatar.url} />
            </div>
            <div>{author.name}</div>
          </div>
          <div className={styles.card__lower__info__date}>{datePublished}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
