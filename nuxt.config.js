
const env = process.env
const GRAHPQL_HOST = env.GRAHPQL_HOST ? env.GRAHPQL_HOST : "localhost";
const GRAPHQL_PORT = env.GRAPHQL_PORT ? env.GRAPHQL_PORT : "8080";
const GRAPHQL_BROWSER_URL = env.GRAPHQL_BROWSER_URL ? env.GRAPHQL_BROWSER_URL : "http://" + GRAHPQL_HOST + ":" + GRAPHQL_PORT;

const FRONT_PORT = env.FRONT_PORT ? env.FRONT_PORT : "3000";
const FRONT_BASE = env.FRONT_BASE ? env.FRONT_BASE : "/";

console.log("GRAHPQL_HOST=" + GRAHPQL_HOST + ", GRAPHQL_PORT=" + GRAPHQL_PORT + ", GRAPHQL_BROWSER_URL=" + GRAPHQL_BROWSER_URL);
console.log("FRONT_PORT=" + FRONT_PORT + ", FRONT_BASE=" + FRONT_BASE);

export default {
  mode: 'universal',
  // add for sub directory
  router: {
    base: FRONT_BASE
  },

  /*
  ** Headers of the page
  */
  head: {
    // add for sub directory
    base: {
      href: 'router.base'
    },

    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: FRONT_BASE + 'favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/vuetify'
  ],
  apollo: {
    clientConfigs: {
      default: {
        // GraphQLサーバーのエンドポイント
        httpEndpoint: 'http://' + GRAHPQL_HOST + ':' + GRAPHQL_PORT + '/query',
        browserHttpEndpoint: GRAPHQL_BROWSER_URL + '/query'
      }
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  server: {
    port: FRONT_PORT, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  },
  telemetry: false // Are you interested in participation? の質問を回避
}
