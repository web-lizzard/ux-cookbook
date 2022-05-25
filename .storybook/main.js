const AutoImport = require("unplugin-auto-import/vite");
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
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
        ],
        dts: '.storybook/auto-imports.d.ts',
      }))

      return config
  },
}
