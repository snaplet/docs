const { remarkCodeHike } = require("@code-hike/mdx");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  titleSuffix: ' – Snaplet',
  mdxOptions: {
    remarkPlugins: [
      [remarkCodeHike, { theme: "github-from-css", showCopyButton: true }],
    ],
  },
});

/** import('next').Config */
module.exports = withNextra({
  transpilePackages: ["monaco-editor"],
  redirects() {
    return [
      {
        source: "/",
        destination: "/getting-started/overview",
        permanent: true,
      },
    ];
  },
});
