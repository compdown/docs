import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Compdown',
  description: 'A natural language for After Effects',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'compdown.com', link: 'https://compdown.com' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' },
        ]
      },
      {
        text: 'YAML Reference',
        items: [
          { text: 'Overview', link: '/reference/' },
          { text: 'Folders', link: '/reference/folders' },
          { text: 'Files', link: '/reference/files' },
          { text: 'Compositions', link: '/reference/compositions' },
          { text: 'Layers', link: '/reference/layers' },
          { text: 'Transform', link: '/reference/transform' },
          { text: 'Effects', link: '/reference/effects' },
          { text: 'Shapes', link: '/reference/shapes' },
          { text: 'Essential Graphics', link: '/reference/essential-graphics' },
          { text: 'Markers', link: '/reference/markers' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Overview', link: '/examples/' },
          { text: 'Lower Third', link: '/examples/lower-third' },
          { text: 'Animated Background', link: '/examples/animated-background' },
          { text: 'Text Animations', link: '/examples/text-animations' },
          { text: 'Motion Templates', link: '/examples/motion-templates' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/compdown/compdown' }
    ],

    footer: {
      message: 'Released under the MIT License.',
    },

    search: {
      provider: 'local'
    }
  }
})
