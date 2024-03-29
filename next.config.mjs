/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",
  assetPrefix: process.env.ENVIRONMENT === "dev" ? "" : "/2024/",
  basePath: process.env.ENVIRONMENT === "dev" ? "" : "/2024",
  compiler: {
    styledComponents: true,
  },

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
}

export default nextConfig
