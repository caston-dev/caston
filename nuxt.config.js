module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CASTON | クリエイターと俳優のマッチングサービス',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-100.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
  ],
  styleResources: {
    scss: [
      'assets/scss/_variable.scss',
      'assets/scss/_mixin.scss'
    ]
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans']
    }
  },
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false },
    '~/plugins/scroll'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  }
}
