import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ postTitle, coverPhoto, slug }) => {
  return (
    <div>
      <Link href={`/posts/${slug}`}>
        <Image width="500" height="500" src={coverPhoto.url} />
      </Link>
      {postTitle}
    </div>
  );
};

export default BlogCard;
