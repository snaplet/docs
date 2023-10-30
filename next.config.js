const { remarkCodeHike } = require("@code-hike/mdx");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
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

      // old doc links used in cli 0.63.6 and below
      {
        source: "/references/connection-strings",
        destination: "/guides/postgresql#connection-strings",
        permanent: false,
      },
      {
        source: "/references/connection-strings/#troubleshooting",
        destination: "/guides/postgresql#troubleshooting-connection-strings",
        permanent: false,
      },
      {
        source: "/references/configuration-files",
        destination: "/reference/configuration",
        permanent: false,
      },
      {
        source: "/getting-started/start-here",
        destination: "/getting-started/overview",
        permanent: false,
      },
      {
        source: "/getting-started/data-operations",
        destination: "/core-concepts/reference/configuration",
        permanent: false,
      },
      {
        source:
          "/tutorials/supabase-clone-environments#step-6-restore-the-data-target",
        destination: "/recipes/supabase#6-restore-the-data-target",
        permanent: false,
      },
      {
        source: "/references/data-operations/generate",
        destination: "/reference/configuration#generate",
        permanent: false,
      },
      {
        source: "/references/data-operations/exclude",
        destination: "/reference/configuration#select",
        permanent: false,
      },
      {
        source: "/references/data-operations/transform",
        destination: "/reference/configuration#transform",
        permanent: false,
      },
      {
        source: "/references/data-operations/reduce",
        destination: "/reference/configuration#subset",
        permanent: false,
      },
      {
        source: "/references/data-operations/introspect",
        destination: "/reference/configuration#introspect",
        permanent: false,
      },
      {
        source: "/tutorials/prisma-seed",
        destination: "/recipes/prisma",
        permanent: false,
      },
      {
        source: "/references/preview-databases",
        destination: "/core-concepts/deploy#preview-databases-on-snaplet-cloud",
        permanent: false,
      },
      {
        source: "/guides/netlify-preview-plugin",
        destination: "/recipes/netlify",
        permanent: false,
      },
      {
        source: "/getting-started/sharing",
        destination: "/getting-started/overview",
        permanent: false,
      },
      {
        source: "/tutorials/supabase-clone-environments",
        destination: "/recipes/supabase",
        permanent: false,
      },
      {
        source: "/getting-started/quick-start/guides/postgresql",
        destination: "/guides/postgresql",
        permanent: false,
      },
      {
        source: "/getting-started/quick-start",
        destination: "/getting-started/overview",
        permanent: false,
      },
      {
        source: "/getting-started/configuration",
        destination: "/getting-started/overview",
        permanent: false,
      },
      {
        source: "/getting-started/generate",
        destination: "/getting-started/quick-start/generate",
        permanent: false,
      },
      {
        source: "/getting-started/restoring",
        destination: "/getting-started/overview",
        permanent: false,
      },
      {
        source: "/configuration/snaplet-config-file",
        destination: "/reference/configuration",
        permanent: false,
      },
    ];
  },
});
