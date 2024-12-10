/** @type {import("next").NextConfig} */
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      ["@stefanprobst/rehype-extract-toc"],
      ["@stefanprobst/rehype-extract-toc/mdx"],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
