// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infraestructura Tecnológica',
  tagline: 'Documentación de redes, hardware y comunicaciones',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://infra-tecnologica.vercel.app', 
  baseUrl: '/',

  // Configuración de GitHub
  organizationName: 'Andy_Ch', 
  projectName: 'infra-tecnologica', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es', // Cambiado a español
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Se eliminaron los enlaces de edición de Facebook para evitar errores
        },
        blog: false, // <-- El blog queda desactivado correctamente aquí
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Infra. Tecnológica',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          // Eliminado el botón del blog
          {
            href: 'https://github.com/andychambiar-commits',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentación',
                to: '/docs/Comunicaciones', // Mayúscula correcta
              },
            ],
          },
          {
            title: 'Mis Redes',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com/andychambiar-commits',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Acerca de mi (Andy)',
                href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Infraestructura Tecnológica. Proyecto académico.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;