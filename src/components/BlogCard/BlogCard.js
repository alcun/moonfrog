import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";

const BlogCard = ({ postTitle, coverPhoto, slug }) => {
  return (
    <div className={styles.card}>
        <Link className={styles.cardImgLink}href={`/posts/${slug}`}>
          <Image fill src={coverPhoto.url} />
        </Link>
      {postTitle}
    </div>
  );
};

export default BlogCard;
