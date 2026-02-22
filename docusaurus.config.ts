import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AdventuriQ Docs',
  tagline: 'Manual de Usuario del Gamifier',
  favicon: 'img/favicon.ico',
  url: 'https://www.adventuriq.com',
  baseUrl: '/docs/',
  organizationName: 'adventuriq',
  projectName: 'adventuriq-docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["es"],
      }),
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.7,
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Documentación oficial de AdventuriQ Gamifier. Aprende a crear aventuras gamificadas, misiones, retos y recompensas para turismo, RRHH, educación y eventos.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'AdventuriQ Docs - Manual de Usuario del Gamifier',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Guía completa para crear experiencias gamificadas con AdventuriQ. Aventuras, misiones, retos, tokens y más.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://www.adventuriq.com/docs/',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://www.adventuriq.com/docs/',
      },
    },
  ],
  themeConfig: {
    navbar: {
      title: 'AdventuriQ Docs',
      logo: {
        alt: 'AdventuriQ Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://gamifier.adventuriq.com',
          label: 'Gamifier',
          position: 'right',
        },
        {
          href: 'https://webapp.adventuriq.com',
          label: 'Web App',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            { label: 'Introducción', to: '/' },
            { label: 'Aventuras', to: '/aventuras/configuracion' },
            { label: 'Misiones', to: '/misiones/configuracion' },
            { label: 'Retos', to: '/retos/tipos-de-reto' },
          ],
        },
        {
          title: 'AdventuriQ',
          items: [
            { label: 'Gamifier', href: 'https://gamifier.adventuriq.com' },
            { label: 'Web App', href: 'https://webapp.adventuriq.com' },
            { label: 'Website', href: 'https://www.adventuriq.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} AdventuriQ. Todos los derechos reservados.`,
    },
    colorMode: {
      defaultMode: 'light',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
