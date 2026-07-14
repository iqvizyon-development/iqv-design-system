const path = require('path');
const { getPackageStoriesGlob, registerTsPaths, rules, registerRules } = require('@iqvizyonui/scripts-storybook');

const rootMain = require('../../../.storybook/main');

const tsConfigAllPath = path.join(__dirname, '../../../tsconfig.base.all.json');

module.exports = /** @type {Omit<import('../../../.storybook/main'), 'typescript'|'babel'>} */ ({
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/**/*.mdx',
    '../src/**/index.stories.@(ts|tsx)',
    ...getPackageStoriesGlob({
      packageName: '@iqvizyonui/react-components',
      callerPath: __dirname,
      excludeStoriesInsertionFromPackages: [
        // Exclude packages that don't have story files
        '@iqvizyonui/react-icons-compat',
        '@iqvizyonui/react-tabster',
        '@iqvizyonui/react-utilities',
        // Exclude deprecated packages
        '@iqvizyonui/react-alert',
        '@iqvizyonui/react-infobutton',
        '@iqvizyonui/react-virtualizer',
      ],
    }),
    ...getPackageStoriesGlob({
      packageName: '@iqvizyonui/react-docsite',
      callerPath: __dirname,
      excludeStoriesInsertionFromPackages: [
        '@iqvizyonui/react-storybook-addon',
        '@iqvizyonui/react-storybook-addon-export-to-sandbox',
        '@iqvizyonui/theme-designer',
        '@iqvizyonui/react-nav',
      ],
    }),
    // This is a workaround to include only the Nav component stories from react-nav package
    // as the package has a lot of broken stories that are causing the build to fail.
    //
    // TODO: Remove this workaround once the stories are fixed or we have a better way to
    // decide which stories to include/exclude in docs mode.
    '../../../packages/react-components/react-nav/stories/src/Nav/index.stories.@(ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [...rootMain.addons],
  build: {
    previewUrl: process.env.DEPLOY_PATH,
  },
  webpackFinal: (config, options) => {
    const localConfig = /** @type config */ ({ ...rootMain.webpackFinal(config, options) });

    // add your own webpack tweaks if needed
    registerTsPaths({ configFile: tsConfigAllPath, config: localConfig });
    registerRules({
      rules: [rules.scssRule, ...(process.env.REACT_COMPILER ? rules.reactCompilerRule : [])],
      config: localConfig,
    });

    return localConfig;
  },
  refs: {
    'fluent-system-icons': {
      title: 'Fluent System Icons',
      url: 'https://microsoft.github.io/fluentui-system-icons/',
      expanded: false,
      sourceUrl: 'https://github.com/microsoft/fluentui-system-icons',
    },
    contrib: {
      title: 'Contributors Packages',
      url: 'https://microsoft.github.io/fluentui-contrib/docsite/',
      expanded: false,
      sourceUrl: 'https://github.com/microsoft/fluentui-contrib',
    },
    charts: {
      title: 'Charts v9',
      url: 'https://ibz-04.github.io/iqvui/charts/',
      expanded: false,
      sourceUrl: 'https://github.com/iBz-04/iqvui/tree/master/packages/charts/react-charts',
    },
  },
});
