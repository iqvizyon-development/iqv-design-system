const configHelpers = require('./utils/configHelpers');
const rules = require('./rules');

/** @type {Record<string, import('eslint').Linter.Config>} */
const configs = {
  get 'flat/core'() {
    return require('./configs/core');
  },
  get 'flat/react'() {
    return require('./configs/react');
  },
  get 'flat/node'() {
    return require('./configs/node');
  },
  get 'flat/imports'() {
    return require('./configs/imports');
  },
};

const plugin = {
  namespace: '@iqvizyonui',
  configs,
  rules,
  configHelpers,
};

module.exports = plugin;
