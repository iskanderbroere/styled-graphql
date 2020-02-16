import { Configuration } from '@nuxt/types'

const config: Configuration = {
  modulesDir: ['../../node_modules'],
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: ['~/plugins/vue-composition-api.ts'],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],
}

export default config
