const AutoImport = require("unplugin-auto-import/vite");
const Components = require("unplugin-vue-components/vite");
const path  = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-console"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
    async viteFinal(config, { configType }) {
      config.plugins = config.plugins ?? []
      config.plugins.push(AutoImport({
        imports: [
          'vue',
          'vue-router',
          {
            'gsap': [
              'gsap'
            ]
          }
        ],
        dts: '../auto-imports.d.ts',
      }))
      config.plugins.push(Components({
        dts: '../components.d.ts'
      }))
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': `${path.resolve(__dirname, '..')}/src`
      }
      config.css ={
        preprocessorOptions: {
          scss: {
            additionalData: `
              @import '../src/assets/scss/variables.scss';     
              `
          }
        }
        }

      return config
  },
}
