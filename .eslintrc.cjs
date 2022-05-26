/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended",
      "@vue/eslint-config-typescript/recommended",
      "plugin:storybook/recommended"],
    "rules": {
        'no-undef': 'off'
    },
  "env": {
    "vue/setup-compiler-macros": true
  }
};
