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
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-100.png' },
      { rel: 'stylesheet', href: '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-fontawesome'
  ],
  styleResources: {
    scss: [
      'assets/scss/app.scss',
      'assets/scss/foundation/_variable.scss',
      'assets/scss/foundation/_mixin.scss'
    ]
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans']
    }
  },
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false },
    '~/plugins/scroll',
    '~/plugins/buefy'
  ],
  css: [
    { src: '~assets/scss/app.scss', lang: 'sass' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
  ],
}
