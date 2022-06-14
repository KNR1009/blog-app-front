// Types
import { NextPage } from "next";
import React from "react";

// components
import { Blog } from "../../src/components/pages/blog";

type Props = {};

const BlogPage: NextPage<Props> = () => {
  return <Blog></Blog>;
};

export default BlogPage;
