// @ts-check

const rootConfig = require('../../../eslint.config.js');

module.exports = [
  ...rootConfig,
  {
    rules: {
      '@iqvizyonui/react-components/enforce-use-client': 'off',
    },
  },
];
