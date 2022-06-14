import React from "react";
import Link from "next/link";

export const Blog = () => {
  return (
    <div>
      <Link href="/blog/create">
        <a>新規作成ページへ</a>
      </Link>
    </div>
  );
};
