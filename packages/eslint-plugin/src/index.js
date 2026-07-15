const configHelpers = require('./utils/configHelpers');
const rules = require('./rules');

/** @type {Record<string, import('eslint').Linter.Config>} */
const configs = {
  'flat/core': require('./configs/core'),
  'flat/react': require('./configs/react'),
  'flat/node': require('./configs/node'),
  'flat/imports': require('./configs/imports'),
};

const plugin = {
  namespace: '@iqvizyonui',
  configs,
  rules,
  configHelpers,
};

module.exports = plugin;
