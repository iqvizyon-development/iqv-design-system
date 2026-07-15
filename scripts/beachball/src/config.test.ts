import toolsConfig from './release-tools.config';
import v1Config from './release-v1.config';
import webComponentsConfig from './release-web-components.config';
import { config as sharedConfig } from './shared.config';

describe(`beachball configs`, () => {
  it(`should generate shared config`, () => {
    expect(sharedConfig).toEqual({
      changehint: "Run 'yarn change' to generate a change file",
      disallowedChangeTypes: ['major'],
      generateChangelog: true,
      hooks: {
        precommit: expect.any(Function),
      },
      ignorePatterns: [
        '**/*.{shot,snap}',
        '**/*.{test,spec,cy}.{ts,tsx}',
        '**/*.stories.{ts,tsx}',
        '**/.eslintrc.*',
        '**/eslint.config.*',
        '**/rit.config.js',
        '**/__fixtures__/**',
        '**/__mocks__/**',
        '**/docs/**',
        '**/stories/**',
        '**/.storybook/**',
        '**/bundle-size/**',
        '**/common/isConformant.ts',
        '**/src/testing/**',
        '**/src/e2e/**',
        '**/config/tests.js',
        '**/jest.config.js',
        '**/SPEC*.md',
        '**/tests/**',
      ],
      scope: [],
      tag: 'latest',
      changelog: {
        customRenderers: {
          renderEntry: expect.any(Function),
          renderHeader: expect.any(Function),
        },
      },
    });
  });

  it(`should generate v1 release config`, () => {
    expect(v1Config.scope.some(scope => scope.startsWith('packages/react-'))).toBe(true);

    const includeScopes = v1Config.scope;

    expect(v1Config.changelog.customRenderers).toEqual(sharedConfig.changelog.customRenderers);
    expect(v1Config.changelog.groups).toEqual([
      {
        changelogPath: 'packages/react-components/react-components',
        masterPackageName: '@iqvizyonui/react-components',
        include: includeScopes,
      },
    ]);

    expect(v1Config.scope.some(scope => toolsConfig.scope.includes(scope))).toBe(false);
  });

  it(`should generate web-components release config`, () => {
    expect(webComponentsConfig.scope).toEqual(expect.arrayContaining(['packages/web-components']));
    expect(webComponentsConfig.changelog).toEqual(sharedConfig.changelog);
  });

  it(`should generate tools release config`, () => {
    expect(toolsConfig.scope).toEqual(
      expect.arrayContaining([
        'packages/react-components/babel-preset-storybook-full-source',
        'packages/react-components/eslint-plugin-react-components',
        'packages/react-components/react-conformance-griffel',
        'packages/react-components/react-storybook-addon',
        'packages/react-components/react-storybook-addon-export-to-sandbox',
        'packages/react-conformance',
      ]),
    );

    const nonToolsScopes = [
      'packages/react-components/react-components',
      'packages/react-components/react-text',
      'packages/react-components/react-card',
    ];
    const hasToolsTag = toolsConfig.scope.some(scope => nonToolsScopes.includes(scope));
    expect(hasToolsTag).toBe(false);

    expect(toolsConfig.changelog).toEqual(sharedConfig.changelog);
  });
});
