import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repositoryName?.endsWith(".github.io");
const basePath = isGithubActions && repositoryName && !isUserSite
  ? `/${repositoryName}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
