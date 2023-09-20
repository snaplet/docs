import type { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/Logo";

const themeConfig: DocsThemeConfig = {
  chat: {
    link: "https://app.snaplet.dev/chat",
  },
  logo: <Logo />,
  project: {
    link: "https://snaplet.dev",
  },
  docsRepositoryBase: "https://github.com/snaplet/docs",
  primaryHue: {
    light: 233,
    dark: 233,
  },
};

export default themeConfig;
