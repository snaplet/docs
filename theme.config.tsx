import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/Logo";

const themeConfig: DocsThemeConfig = {
  chat: {
    link: "https://app.snaplet.dev/chat",
  },
  logo: <Logo />,
  project: {
    link: "https://snaplet.dev",
  },
  docsRepositoryBase: "https://github.com/snaplet/docs/tree/main",
  primaryHue: {
    light: 233,
    dark: 233,
  },
  // @ts-expect-error httpEquiv: "Content-Language" is valid
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      titleTemplate: "%s – Snaplet",
      additionalLinkTags: [
        {
          href: "/apple-touch-icon.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        {
          content: "Snaplet Documentation",
          name: "apple-mobile-web-app-title",
        },
        { content: "#b5bdf6", name: "msapplication-TileColor" },
        { content: "/ms-icon-150x150.png", name: "msapplication-TileImage" },
      ],
      description: frontMatter.description || "Snaplet Documentation",
      openGraph: {
        images: [
          { url: frontMatter.image || "https://docs.snaplet.dev/og.png" },
        ],
      },
      twitter: {
        cardType: "summary_large_image",
        site: "https://docs.snaplet.dev",
      },
    };
  },
  sidebar: {
    defaultMenuCollapseLevel: 3,
  },
};

export default themeConfig;
