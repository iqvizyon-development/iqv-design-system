// @ts-check

/**
 * Root ESLint configuration for Iqvizyon UI monorepo
 *
 * - Root config provides base rules for react-components (v1) packages
 * - React packages extend this config and add overrides as needed
 */

const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = iqvizyonPlugin.configs['flat/react'];
