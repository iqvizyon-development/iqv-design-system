const { ESLintUtils } = require('@typescript-eslint/utils');

module.exports = ESLintUtils.RuleCreator(
  name => `https://github.com/iBz-04/iqvui/blob/master/packages/eslint-plugin/README.md#${name}`,
);
