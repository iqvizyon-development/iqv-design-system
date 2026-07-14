import * as path from 'path';
import { modifyImportsPlugin as plugin, PLUGIN_NAME } from './modifyImports';
import pluginTester from 'babel-plugin-tester';

const fixturesDir = path.join(__dirname, `__fixtures__/${PLUGIN_NAME}`);
const defaultDependencyReplace = { replace: '@iqvizyonui/react-components' };

describe(PLUGIN_NAME, () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {
      return;
    });
  });

  pluginTester({
    fixtures: fixturesDir,
    pluginOptions: {
      importMappings: {
        '@iqvizyonui/react-button': defaultDependencyReplace,
        '@iqvizyonui/react-menu': defaultDependencyReplace,
        '@iqvizyonui/react-link': defaultDependencyReplace,
        '@iqvizyonui/react-unstable-component': { replace: '@iqvizyonui/react-components/unstable' },
      },
    },
    pluginName: PLUGIN_NAME,
    plugin,
  });
});
