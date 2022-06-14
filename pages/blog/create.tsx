// Types
import { NextPage } from "next";
import React from "react";
// components
import { BlogCreate } from "../../src/components/pages/blog/create";

type Props = {};

const BlogCreatePage: NextPage<Props> = () => {
  return <BlogCreate></BlogCreate>;
};

export default BlogCreatePage;
