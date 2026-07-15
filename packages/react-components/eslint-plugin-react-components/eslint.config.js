// @ts-check
const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');
const eslintPlugin = require('eslint-plugin-eslint-plugin');

module.exports = [
  ...iqvizyonPlugin.configs['flat/node'],
  eslintPlugin.configs['flat/recommended'],
  {
    files: ['**/src/rules/*.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];
