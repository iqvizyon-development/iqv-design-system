// @ts-check
const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [...iqvizyonPlugin.configs['flat/node']];
