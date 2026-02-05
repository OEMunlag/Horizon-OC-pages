import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../docs",
  
  title: "Horizon OC",
  description: "An open source overclocking tool for Nintendo Switch consoles running Atmosphere custom firmware ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Mariko OC Guide', link: '/mariko' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Horizon-OC/Horizon-OC' }
    ]
  }
})
