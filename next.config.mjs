import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  output: "export",
  distDir: "out",
  trailingSlash: true,
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    config.cache = false;

    return config;
  },
};

export default withContentlayer(nextConfig);
