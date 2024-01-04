const { remarkCodeHike } = require('@code-hike/mdx');

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  unstable_underscoreMeta: true,
  mdxOptions: {
    remarkPlugins: [
      [remarkCodeHike, { theme: 'github-from-css', showCopyButton: true }],
    ],
  },
});

/** import('next').Config */
module.exports = withNextra({
  transpilePackages: ['monaco-editor'],
  redirects() {
    return [
      {
        source: '/',
        destination: '/getting-started/overview',
        permanent: true,
      },

      // old doc links used in cli 0.63.6 and below
      {
        source: '/references/connection-strings',
        destination: '/guides/postgresql#connection-strings',
        permanent: true,
      },
      {
        source: '/references/connection-strings/#troubleshooting',
        destination: '/guides/postgresql#troubleshooting-connection-strings',
        permanent: true,
      },
      {
        source: '/references/configuration-files',
        destination: '/reference/configuration',
        permanent: true,
      },
      {
        source: '/getting-started/start-here',
        destination: '/getting-started/overview',
        permanent: true,
      },
      {
        source: '/getting-started/data-operations',
        destination: '/core-concepts/reference/configuration',
        permanent: true,
      },
      {
        source:
          '/tutorials/supabase-clone-environments#step-6-restore-the-data-target',
        destination: '/recipes/supabase#6-restore-the-data-target',
        permanent: true,
      },
      {
        source: '/references/data-operations/generate',
        destination: '/reference/configuration#generate',
        permanent: true,
      },
      {
        source: '/references/data-operations/exclude',
        destination: '/reference/configuration#select',
        permanent: true,
      },
      {
        source: '/references/data-operations/transform',
        destination: '/reference/configuration#transform',
        permanent: true,
      },
      {
        source: '/references/data-operations/reduce',
        destination: '/reference/configuration#subset',
        permanent: true,
      },
      {
        source: '/references/data-operations/introspect',
        destination: '/reference/configuration#introspect',
        permanent: true,
      },
      {
        source: '/tutorials/neon',
        destination: '/recipes/neon',
        permanent: true,
      },
      {
        source: '/tutorials/prisma-seed',
        destination: '/recipes/prisma',
        permanent: true,
      },
      {
        source: '/references/preview-databases',
        destination: '/core-concepts/deploy#preview-databases-on-snaplet-cloud',
        permanent: true,
      },
      {
        source: '/guides/netlify-preview-plugin',
        destination: '/recipes/netlify',
        permanent: true,
      },
      {
        source: '/getting-started/sharing',
        destination: '/getting-started/overview',
        permanent: true,
      },
      {
        source: '/tutorials/supabase-clone-environments',
        destination: '/recipes/supabase',
        permanent: true,
      },
      {
        source: '/getting-started/quick-start/guides/postgresql',
        destination: '/guides/postgresql',
        permanent: true,
      },
      {
        source: '/getting-started/quick-start',
        destination: '/getting-started/overview',
        permanent: true,
      },
      {
        source: '/getting-started/configuration',
        destination: '/getting-started/overview',
        permanent: true,
      },
      {
        source: '/getting-started/generate',
        destination: '/getting-started/quick-start/generate',
        permanent: true,
      },
      {
        source: '/getting-started/restoring',
        destination: '/getting-started/overview',
        permanent: true,
      },
      {
        source: '/configuration/snaplet-config-file',
        destination: '/reference/configuration',
        permanent: true,
      },
      {
        source: '/core-concepts/generate',
        destination: '/core-concepts/seed',
        permanent: true,
      },
      {
        source: '/getting-started/quick-start/generate',
        destination: '/getting-started/quick-start/seed',
        permanent: true,
      },
      {
        source: '/migrations/generate',
        destination: '/migrations/seed',
        permanent: true,
      },
      {
        source: '/references/snapshots',
        destination: '/core-concepts/capture',
        permanent: true,
      },
      {
        source: '/core-concepts/reference/configuration',
        destination: '/reference/configuration',
        permanent: true,
      },
    ];
  },
});
