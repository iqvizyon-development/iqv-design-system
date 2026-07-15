// @ts-check

const { defineConfig } = require('eslint/config');
const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = defineConfig([
  ...iqvizyonPlugin.configs['flat/node'],
  {
    rules: {
      '@iqvizyonui/react-components/enforce-use-client': 'off',
    },
  },
]);
