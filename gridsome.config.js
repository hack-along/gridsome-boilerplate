// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Hackalong Boilerplate',
  siteDescription: "Lorem ipsum",
  siteUrl: "http://hackalong.io",
  templates: {
    Tag: [{
      path: '/event/tag/:title',
      component: './src/templates/Tag.vue'
    }]
  },
  plugins: [{
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Event', // Required
        baseDir: './content/events', // Where .md files are located
        pathPrefix: '/events', // Add route prefix. Optional
        template: './src/templates/Event.vue', // Optional
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'MdPage', // Required
        baseDir: './content/page', // Where .md files are located
        pathPrefix: '/', // Add route prefix. Optional
        template: './src/templates/Page.vue', // Optional
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blocks',
        baseDir: './content/blocks',
        pathPrefix: '/blocks',
        path: '*.md',
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    // {
    //   use: "gridsome-plugin-pwa",
    //   options: {
    //     title: "Equinox Unconference",
    //     startUrl: "/",
    //     disableServiceWorker: true,
    //     display: "minimal-UI",
    //     statusBarStyle: "default",
    //     manifestPath: "manifest.json",
    //     cachedFileTypes: 'css,html,jpg',
    //     disableTemplatedUrls: true,
    //     shortName: "Unconference",
    //     themeColor: "#fd0719",
    //     backgroundColor: "#ffffff",
    //     purpose: "maskable",
    //     icon: "src/favicon.png",
    //     svgFavicon: 'favicon.svg',
    //     msTileImage: "src/favicon.png",
    //     msTileColor: "#fd0719",
    //   }
    // }

  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    }
  },
  chainWebpack: config => {
    // config
    //   .plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{
    //     analyzerMode: 'static'
    //   }])
    config.plugin('MomentLocalesPlugin').use(MomentLocalesPlugin())
    config.resolve.alias.set('@images', '@/assets/img')
  }
}