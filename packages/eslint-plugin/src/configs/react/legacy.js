// @ts-check
const baseLegacyConfig = require('../base/legacy');
const reactConfig = require('../react/config');
const configHelpers = require('../../utils/configHelpers');
const { reactLegacy: restrictedGlobals } = require('../../shared/restricted-globals');
const { createReactCrossVersionRules } = require('../../shared/react-cross-version-rules');
const { defineConfig } = require('eslint/config');

/** @type { import("eslint").Linter.Config } */
module.exports = defineConfig(
  baseLegacyConfig,
  reactConfig,
  {
    rules: {
      'jsdoc/check-tag-names': 'off',
      '@griffel/no-shorthands': 'off',
      'no-restricted-globals': restrictedGlobals,
      ...createReactCrossVersionRules({
        crossCompatTypePackage: '@iqvizyonui/utilities',
      }),
    },
  },
  {
    // Test overrides
    files: [...configHelpers.testFiles, '**/*.stories.tsx'],
    rules: {
      'no-restricted-globals': 'off',
      'react/jsx-no-bind': 'off',
      '@typescript-eslint/no-deprecated': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
);
