import type { ESLint } from 'eslint';

import { name, version } from '../package.json';
import { RULE_NAME as enforceUseClientName, rule as enforceUseClient } from './rules/enforce-use-client';
import { RULE_NAME as preferReactComponentsName, rule as preferReactComponents } from './rules/prefer-react-components';

export const meta = {
  name,
  version,
};
export const rules = {
  [enforceUseClientName]: enforceUseClient,
  [preferReactComponentsName]: preferReactComponents,
};

const recommendedRules = {
  '@iqvizyonui/react-components/prefer-react-components': 'warn',
};

export const configs = {
  recommended: {
    plugins: [name],
    rules: recommendedRules,
  },
  'flat/recommended': {
    // Define plugins as an object to satisfy ESLint v9 flat config format
    // the actual plugin will be assigned later to avoid circular dependencies
    plugins: { [name]: {} as ESLint.Plugin },
    rules: recommendedRules,
  },
};

const plugin = {
  meta,
  configs,
  rules,
};

// Flat config for eslint v9
configs['flat/recommended'].plugins = {
  [name]: plugin as unknown as ESLint.Plugin,
};

module.exports = plugin;
