import type { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/Logo";

const themeConfig: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://snaplet.dev'
  },
  docsRepositoryBase: 'https://github.com/snaplet/docs',
  primaryHue: 232,
};

export default themeConfig;