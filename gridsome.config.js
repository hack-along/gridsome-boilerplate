// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Hackalong boilerplate',
  plugins: [{
    use: '@gridsome/vue-remark',
    options: {
      typeName: 'Event', // Required
      baseDir: './content/events', // Where .md files are located
      pathPrefix: '/event', // Add route prefix. Optional
      template: './src/templates/Event.vue' // Optional
    }
  }],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}