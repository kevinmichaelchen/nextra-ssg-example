const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

const isProduction = process.env.NODE_ENV === "production";

module.exports = withNextra({
  output: "export",
  transpilePackages: ["react-tweet"],
  images: {
    unoptimized: isProduction,
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
    ],
  },
});
