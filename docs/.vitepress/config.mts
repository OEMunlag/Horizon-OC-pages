import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Horizon OC",
  description: "An open source overclocking tool for Nintendo Switch consoles running Atmosphere custom firmware ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guide.md' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting Started', link: '/guide.md' },
          { text: 'Frequently Asked Questions', link: '/faq.md' },
          { text: 'Mariko OC Guide', link: '/mariko.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Horizon-OC/Horizon-OC' }
    ]
  }
})
