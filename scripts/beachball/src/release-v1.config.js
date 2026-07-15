require('./register').register();

const { config: sharedConfig } = require('./shared.config');
const { getConfig } = require('./utils');

const { scope, groupConfig } = getConfig({ version: 'v1' });

const config = {
  ...sharedConfig,
  scope: [...sharedConfig.scope, ...scope],
  changelog: {
    ...sharedConfig.changelog,
    groups: [groupConfig],
  },
};

module.exports = config;
