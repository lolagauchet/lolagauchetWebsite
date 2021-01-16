export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    title: 'Lola Gauchet | Développeuse Front-End',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Je m\'appelle Lola Gauchet, je suis développeuse Front-end spécialisée Drupal depuis 2ans. Ayant la volonté d’évoluer sur des projets en Vue.js ou React je suis actuellement à la recherche d’un nouveau poste. Allier expérience utilisateur et bonnes pratiques web est source de motivation pour moi. Je suis motivée pour rendre vie à vos designs afin de délivrer des outils digitaux performants et adaptés à la demande client.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['normalize.css/normalize.css'],
  styleResources: {
    scss: ['./assets/**/*.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/components'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  components: true
}
