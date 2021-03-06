/* eslint-disable prettier/prettier */
import shrinkRay from 'shrink-ray-current'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  render: {
    compressor: shrinkRay()
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: '//cdn.web-fonts.ge/fonts/bpg-mrgvlovani-caps/css/bpg-mrgvlovani-caps.min.css',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/_main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-lazy-load'


  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    build: {
      extend(config, {
        isClient,
        loaders: {
          vue
        }
      }) {
        if (isClient) {
          vue.transformAssetUrls.img = ['data-src', 'src']
          vue.transformAssetUrls.source = ['data-srcset', 'srcset']
        }
      }
    },

  },

  axios: {
    baseURL: 'http://94.237.98.180:8081/api',
  },
  auth: {
    // Doc: https://auth.nuxtjs.org/getting-started/options

    watchLoggedIn: true,
    rewriteRedirects: true,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'auth_token',
          },
          logout: false,
          user: {
            url: '/user',
            method: 'get',
            propertyName: false,
          },
        },
        tokenRequired: true,
        tokenType: '',
      },
    },
  },
}