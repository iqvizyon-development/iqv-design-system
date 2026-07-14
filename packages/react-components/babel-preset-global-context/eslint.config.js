// @ts-check

const fluentPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = [
  ...fluentPlugin.configs['flat/node'],
  {
    rules: {
      '@iqvizyonui/react-components/enforce-use-client': 'off',
    },
  },
];
