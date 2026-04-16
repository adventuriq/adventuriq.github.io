import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AdventuriQ Docs',
  tagline: 'Todo lo que necesitas para crear y jugar Aventuras',
  favicon: 'img/favicon.ico',
  url: 'https://docs.adventuriq.com',
  baseUrl: '/',
  organizationName: 'adventuriq',
  projectName: 'adventuriq.github.io',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
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
    // Imagen por defecto para compartir en redes
    image: 'img/social-card.png',

    navbar: {
      title: 'AdventuriQ Docs',
      logo: {
        alt: 'AdventuriQ Logo',
        src: 'img/logo.svg',
        width: 140,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',  // Verifica que coincida con el ID real de tu sidebar
          position: 'left',
          label: 'Manual',
        },
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
        {
          href: 'https://www.adventuriq.com',
          label: 'Web',
          position: 'right',
        },
        {
          href: 'https://github.com/adventuriq/adventuriq.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Producto',
          items: [
            { label: 'Web oficial', href: 'https://www.adventuriq.com' },
            { label: 'Webapp', href: 'https://webapp.adventuriq.com' },
            { label: 'Precios', href: 'https://www.adventuriq.com/precios' },
          ],
        },
        {
          title: 'Manual',
          items: [
            { label: 'Primeros pasos', to: '/' },
            { label: 'Gamifier', to: '/' },
            { label: 'Webapp', to: '/' },
          ],
        },
        {
          title: 'Contacto',
          items: [
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/adventuriq' },
            { label: 'Contacto', href: 'https://www.adventuriq.com/contacta' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AdventuriQ. Todos los derechos reservados.`,
    },
    colorMode: {
      defaultMode: 'light',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
