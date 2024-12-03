import path from 'node:path'
import { type DefaultTheme, defineConfig } from 'vitepress'
import pkg from '../../package.json'

export default defineConfig({
  srcDir: path.resolve(__dirname, '../../docs'),

  title: 'Zustand',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() },
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pmndrs/zustand' },
      { icon: 'discord', link: 'https://github.com/pmndrs/zustand' },
    ],
  },

  rewrites: {
    // Reference Pages
    'hooks/:page': 'reference/hooks/:page',
    'apis/:page': 'reference/apis/:page',
    'middlewares/:page': 'reference/middlewares/:page',
    // Guide Pages
    'guides/:page': 'guide/:page',
    'getting-started/:page': 'guide/:page',
    'integrations/:page': 'guide/:page',
    'migrations/:page': 'guide/:page',
    'previous-versions/:page': 'guide/:page',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/tutorial-tic-tac-toe',
      activeMatch: '/guide/',
    },
    {
      text: 'Reference',
      link: '/reference/apis/create-store',
      activeMatch: '/reference/',
    },
    {
      text: `v${pkg.version}`,
      items: [
        {
          text: 'Changelog',
          link: `https://github.com/pmndrs/zustand/releases/tag/v${pkg.version}`,
        },
        {
          text: 'Release Notes',
          link: 'https://github.com/pmndrs/zustand/releases',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/pmndrs/zustand/blob/main/CONTRIBUTING.md',
        },
      ],
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is Zustand?', link: 'introduction' },
        { text: 'Comparison', link: 'comparison' },
      ],
    },
    {
      text: 'Get started',
      collapsed: false,
      items: [
        { text: 'TypeScript', link: 'typescript' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' },
      ],
    },
    {
      text: 'Migrations',
      collapsed: false,
      items: [
        { text: 'Migrating to v4', link: 'migrations/migrating-to-v4' },
        { text: 'Migrating to v5', link: 'migrations/migrating-to-v5' },
      ],
    },
    {
      text: 'Guides',
      collapsed: false,
      items: [
        { text: 'Testing', link: 'testing' },
        { text: 'Usage with Immer', link: 'immer-middleware' },
        { text: 'Usage with Nextjs', link: 'nextjs' },
        { text: 'Persisting data', link: 'persisting-store-data' },
        { text: 'Slices pattern', link: 'slices-pattern' },
      ],
    },

    {
      text: 'Config & API Reference',
      base: '/reference/',
      link: 'site-config',
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'APIs',
      collapsed: false,
      items: [
        { text: 'createStore', link: 'apis/create-store' },
        {
          text: 'createWithEqualityFn ⚛️',
          link: 'apis/create-with-equality-fn',
        },
        { text: 'create ⚛️', link: 'apis/create' },
        { text: 'shallow', link: 'apis/shallow' },
      ],
    },
    {
      text: 'Hooks',
      collapsed: false,
      items: [
        { text: 'useShallow ⚛️', link: 'hooks/use-shallow' },
        {
          text: 'useStoreWithEqualityFn ⚛️',
          link: 'hooks/use-store-with-equality-fn',
        },
        { text: 'useStore ⚛️', link: 'hooks/use-store' },
      ],
    },
    {
      text: 'Middlewares',
      collapsed: false,
      items: [
        { text: 'combine', link: 'middlewares/combine' },
        { text: 'devtools', link: 'middlewares/devtools' },
        { text: 'immer', link: 'middlewares/immer' },
        { text: 'persist', link: 'middlewares/persist' },
        { text: 'redux', link: 'middlewares/redux' },
        {
          text: 'subscribeWithSelector',
          link: 'middlewares/subscribe-with-selector',
        },
      ],
    },
  ]
}
