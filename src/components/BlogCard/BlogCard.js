import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ postTitle, coverPhoto }) => {
  return (
    <div>
      <Link href="/">
        <Image width="500" height="500" src={coverPhoto.url} />
      </Link>
      {postTitle}
    </div>
  );
};

export default BlogCard;
