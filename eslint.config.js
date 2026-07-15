// @ts-check

/**
 * Root ESLint configuration for Iqvizyon UI monorepo
 *
 * - Root config provides base rules for react-components (v9) packages
 * - v9 packages extend this config and add overrides as needed
 * - v8 and other legacy packages maintain their own independent configs
 */

const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = iqvizyonPlugin.configs['flat/react'];
