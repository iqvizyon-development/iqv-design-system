import * as path from 'path';
import { removeStorybookParameters as plugin, PLUGIN_NAME } from './removeStorybookParameters';
import pluginTester from 'babel-plugin-tester';

const fixturesDir = path.join(__dirname, `__fixtures__/${PLUGIN_NAME}`);
const defaultDependencyReplace = { replace: '@iqvizyonui/react-components' };

pluginTester({
  fixtures: fixturesDir,
  pluginOptions: {
    '@iqvizyonui/react-button': defaultDependencyReplace,
    '@iqvizyonui/react-menu': defaultDependencyReplace,
    '@iqvizyonui/react-link': defaultDependencyReplace,
  },
  pluginName: PLUGIN_NAME,
  plugin,
});
