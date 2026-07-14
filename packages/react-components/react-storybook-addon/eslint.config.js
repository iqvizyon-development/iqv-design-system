// @ts-check

const rootConfig = require('../../../eslint.config.js');

module.exports = [
  ...rootConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@griffel/styles-file': 'off',
      '@iqvizyonui/react-components/enforce-use-client': 'off',
    },
  },
];
