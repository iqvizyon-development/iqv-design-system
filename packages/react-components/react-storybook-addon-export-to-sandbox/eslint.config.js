// @ts-check

const { defineConfig } = require('eslint/config');
const fluentPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = defineConfig([
  ...fluentPlugin.configs['flat/node'],
  {
    rules: {
      '@iqvizyonui/react-components/enforce-use-client': 'off',
    },
  },
]);
