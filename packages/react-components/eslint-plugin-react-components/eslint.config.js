// @ts-check
const fluentPlugin = require('@iqvizyonui/eslint-plugin');
const eslintPlugin = require('eslint-plugin-eslint-plugin');

module.exports = [
  ...fluentPlugin.configs['flat/node'],
  eslintPlugin.configs['flat/recommended'],
  {
    files: ['**/src/rules/*.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];
