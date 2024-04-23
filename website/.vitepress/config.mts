import { fileURLToPath } from 'node:url'
import { type DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: fileURLToPath(new URL('../../docs', import.meta.url)),
  title: '🐻 Zustand',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/learn': { base: '/learn', items: sidebarLearn() },
      '/reference': { base: '/reference', items: sidebarReference() },
      '/community': { base: '/community', items: sidebarCommunity() },
      '/need-help': { base: '/need-help', items: sidebarNeedHelp() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pmndrs/zustand' },
    ],

    editLink: {
      pattern: 'https://github.com/pmndrs/zustand/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Danilo Britto',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Learn', link: '/learn', activeMatch: '/learn' },
    { text: 'Reference', link: '/reference', activeMatch: '/reference' },
    { text: 'Community', link: '/community', activeMatch: '/community' },
    { text: 'Need Help?', link: '/need-help', activeMatch: '/need-help' },
  ]
}

function sidebarLearn(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Get Started',
      items: [
        {
          text: 'Quick Start',
          collapsed: false,
          items: [
            {
              text: 'Tutorial: Tic-Tac-Toe',
              link: '/tutorial-tic-tac-toe',
            },
            {
              text: 'Thinking in Zustand',
              link: '/thinking-in-zustand',
            },
          ],
        },
        {
          text: 'Instalation',
          collapsed: false,
          items: [
            {
              text: 'Start a new Project',
              link: '/start-a-new-project',
            },
            {
              text: 'Using TypeScript',
              link: '/using-typescript',
            },
          ],
        },
      ],
    },
    {
      text: 'Learn Zustand',
      items: [
        {
          text: 'Managing State',
          collapsed: false,
          items: [
            {
              text: 'Choosing the State Structure',
              link: '/choosing-the-state-structure',
            },
            {
              text: 'Colocating Actions',
              link: '/colocating-actions',
            },
            {
              text: 'Async Data and Data Fetching',
              link: '/async-data-and-data-fetching',
            },
            {
              text: 'Selecting Data and Preventing Re-renders with selectors and equality function',
              link: '/selecting-data-and-preventing-re-renderes-with-with-selectors-and-equality-function',
            },
            {
              text: 'Isolating State Between Components',
              link: '/isolating-state-between-components',
            },
          ],
        },
        {
          text: 'Middlewares',
          collapsed: false,
          items: [
            {
              text: 'Using Middlewares',
              link: '/using-middlewares',
            },
            {
              text: 'Writting Immutable Updates with Immer Middleware',
              link: '/writting-immutable-update-with-immer-middelware',
            },
            {
              text: 'Persisting State with Persist Middleware',
              link: '/persisting-statw-with-persist-middleware',
            },
            {
              text: 'Extracting State Logic into a Reducer with Redux and Devtools Middlewares',
              link: '/extracting-state-logic-into-a-reducer-with-redux-and-devtools-middlewares',
            },
            {
              text: 'Listening to Selected Data with SubscribeWithSelector Middleware',
              link: '/listening-to-selected-data-with-subscribe-with-selector-middleware',
            },
            {
              text: 'Middleware Use Cases',
              link: '/middleware-use-cases',
            },
          ],
        },
        {
          text: 'Next.js',
          link: '/nextjs',
        },
        {
          text: 'Testing',
          link: '/testing',
        },
      ],
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'APIs',
      collapsed: false,
      items: [
        { text: 'createStore (vanilla)', link: '/create-store' },
        { text: 'create (react)', link: '/create' },
        {
          text: 'createWithEqualityFn (react)',
          link: '/create-with-equality-fn',
        },
        { text: 'shallow (vanilla)', link: '/shallow' },
      ],
    },
    {
      text: 'Hooks',
      collapsed: false,
      items: [
        {
          text: 'useStore (react)',
          link: '/use-store',
        },
        {
          text: 'useStoreWithEqualityFn (react)',
          link: '/use-store-with-equality-fn',
        },
        {
          text: 'useShallow (react)',
          link: '/use-shallow',
        },
      ],
    },
    {
      text: 'Middlewares',
      collapsed: false,
      items: [
        {
          text: 'combine (vanilla)',
          link: '/combine',
        },
        {
          text: 'redux (vanilla)',
          link: '/redux',
        },
        {
          text: 'devtools (vanilla)',
          link: '/devtools',
        },
        {
          text: 'immer (vanilla)',
          link: '/immer',
        },
        {
          text: 'subscribeWithSelector (vanilla)',
          link: '/subscribe-with-selector',
        },
      ],
    },
    {
      text: 'Legacy APIs',
      collapsed: false,
      items: [
        {
          text: 'createContext (react)',
          link: '/create-context',
        },
      ],
    },
  ]
}

function sidebarCommunity(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Zustand Videos',
      link: '/zustand-videos',
    },
    {
      text: 'Docs Contributors',
      link: '/docs-contributors',
    },
    {
      text: 'Third-party Libraries',
      link: '/third-party-libraries',
    },
    {
      text: 'Versioning Policy',
      link: '/versioning-policy',
    },
  ]
}

function sidebarNeedHelp(): DefaultTheme.SidebarItem[] {
  return []
}
