const { remarkCodeHike } = require("@code-hike/mdx");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  unstable_underscoreMeta: true,
  mdxOptions: {
    remarkPlugins: [
      [remarkCodeHike, { theme: "github-from-css", showCopyButton: true }],
    ],
  },
});

/**
 * @param {Record<string, string>} json
 * ```ts
 * const input = convertsJSONToRedirects({ "/": "/redirected" })
 *
 * // [{ source: "/", destination: "/redirected", permanent: true }]
 * console.log(input)
 * ```
 */
const convertJSONToRedirects = (json) => {
  return Object.entries(json).map((j) => ({
    source: j[0],
    destination: j[1],
    permanent: true,
  }));
};

/** import('next').Config */
module.exports = withNextra({
  transpilePackages: ["monaco-editor"],
  redirects() {
    return [
      {
        source: "/",
        destination: "/seed/getting-started/overview",
        permanent: true,
      },

      {
        source: "/seed",
        destination: "/seed/getting-started/overview",
        permanent: false,
      },
      {
        source: "/snapshot",
        destination: "/snapshot/getting-started/overview",
        permanent: false,
      },
      // old doc links used in cli 0.63.6 and below
      ...convertJSONToRedirects(require("./redirects/09_Oct_2023.json")),
      // splitting the docs into snapshots and seed
      ...convertJSONToRedirects(require("./redirects/12_March_2024.json")),
    ];
  },
});
