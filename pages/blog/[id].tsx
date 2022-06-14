// Types
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
// components
import { BlogDetail } from "../../src/components/pages/blog/detail";

type Props = {};

const BlogDetailPage: NextPage<Props> = () => {
  const router = useRouter();
  const query = router.query.id as string;

  return <BlogDetail></BlogDetail>;
};

export default BlogDetailPage;
