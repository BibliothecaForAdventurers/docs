import theme from '@nuxt/content-theme-docs'

export default theme({
  head: {
    title: 'Loot Bibliotheca (for Adventurers)',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Inconsolata:wght@300&display=swap',
      },
    ],
  },
  docs: {
    primaryColor: '#9e9e9e'
  }
})
