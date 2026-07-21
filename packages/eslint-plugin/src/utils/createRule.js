const { ESLintUtils } = require('@typescript-eslint/utils');

module.exports = ESLintUtils.RuleCreator(
  name => `https://github.com/iqvizyon-development/iqv-design-system/blob/master/packages/eslint-plugin/README.md#${name}`,
);
