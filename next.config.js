const { remarkCodeHike } = require("@code-hike/mdx")

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme: "github-from-css", showCopyButton: true, }]],
  },
})

module.exports = withNextra({
  redirects() {
    return [
      { source: '/', destination: '/start-here/getting-started', permanent: true }
    ]
  }
})