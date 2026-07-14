import * as path from 'path';
import pluginTester from 'babel-plugin-tester';
import { fullSourcePlugin as plugin, PLUGIN_NAME } from './fullsource';

const fixturesDir = path.join(__dirname, `__fixtures__/${PLUGIN_NAME}`);
const defaultDependencyReplace = { replace: '@iqvizyonui/react-components' };

pluginTester({
  babelOptions: {
    presets: ['@babel/preset-react'],
  },
  fixtures: fixturesDir,
  pluginOptions: {
    importMappings: {
      '@iqvizyonui/react-button': defaultDependencyReplace,
      '@iqvizyonui/react-menu': defaultDependencyReplace,
      '@iqvizyonui/react-link': defaultDependencyReplace,
    },
    cssModules: true,
  },
  pluginName: PLUGIN_NAME,
  plugin,
});

pluginTester({
  babelOptions: {
    presets: ['@babel/preset-react'],
  },
  fixtures: path.join(__dirname, '__fixtures__/storybook-stories-fullsource-with-tokens'),
  pluginOptions: {
    importMappings: {
      '@iqvizyonui/react-button': defaultDependencyReplace,
    },
    cssModules: {
      tokensFilePath: path.join(
        __dirname,
        '__fixtures__/storybook-stories-fullsource-with-tokens/css-module-with-tokens/tokens.css',
      ),
    },
  },
  pluginName: PLUGIN_NAME,
  plugin,
});
