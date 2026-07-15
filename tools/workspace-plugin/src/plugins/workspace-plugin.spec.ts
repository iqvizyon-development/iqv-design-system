import { CreateNodesContext, CreateNodesResultV2, ProjectConfiguration, serializeJson } from '@nx/devkit';

import { TempFs } from './testing-utils/index';
import { WorkspacePluginOptions, createNodesV2 } from './workspace-plugin';
import { PackageJson } from '../types';

describe(`workspace-plugin`, () => {
  const [, createNodesFunction] = createNodesV2;
  let context: CreateNodesContext;
  let tempFs: TempFs;
  let cwd: string;
  const options: WorkspacePluginOptions = {};

  beforeEach(async () => {
    tempFs = new TempFs('test');
    cwd = process.cwd();
    process.chdir(tempFs.tempDir);

    context = {
      nxJsonConfiguration: {
        namedInputs: {
          default: ['{projectRoot}/**/*'],
          production: ['!{projectRoot}/**/*.spec.ts'],
        },
      },
      workspaceRoot: tempFs.tempDir,

      configFiles: [],
    };
  });

  afterEach(() => {
    jest.resetModules();
    tempFs.cleanup();
    process.chdir(cwd);
  });

  it('should create nodes with clean,format targets for any project', async () => {
    await tempFs.createFiles({
      'proj/project.json': serializeJson({}),
      'proj/package.json': serializeJson({}),
    });
    const results = await createNodesFunction(['proj/project.json'], options, context);

    expect(getTargetsNames(results)).toEqual(['clean', 'format', 'type-check']);
  });

  it('should add lint,test task only if configuration exists', async () => {
    await tempFs.createFiles({
      'proj/project.json': serializeJson({}),
      'proj/package.json': serializeJson({}),
      'proj/eslint.config.js': 'module.exports = {}',
      'proj/jest.config.js': 'module.exports = {}',
      'proj/monosize.config.mjs': 'export default {}',
    });
    const results = await createNodesFunction(['proj/project.json'], options, context);
    const targets = getTargets(results);

    expect(targets?.lint).toMatchInlineSnapshot(`
      Object {
        "cache": true,
        "dependsOn": Array [
          Object {
            "projects": Array [
              "eslint-plugin-react-components",
            ],
            "target": "build",
          },
        ],
        "executor": "nx:run-commands",
        "inputs": Array [
          "default",
          "{projectRoot}/eslint.{js,cjs,mjs}",
          "{workspaceRoot}/eslint.config.{js,cjs,mjs}",
          Object {
            "externalDependencies": Array [
              "eslint",
            ],
          },
        ],
        "metadata": Object {
          "description": "Runs ESLint on project",
          "help": Object {
            "command": "yarn eslint --help",
            "example": Object {
              "options": Object {
                "max-warnings": 0,
              },
            },
          },
          "technologies": Array [
            "eslint",
          ],
        },
        "options": Object {
          "command": "yarn eslint src",
          "cwd": "proj",
        },
        "outputs": Array [
          "{options.outputFile}",
        ],
      }
    `);

    expect(targets?.test).toMatchInlineSnapshot(`
      Object {
        "cache": true,
        "command": "yarn jest",
        "inputs": Array [
          "default",
          "^production",
          "{workspaceRoot}/jest.preset.js",
          Object {
            "externalDependencies": Array [
              "jest",
            ],
          },
        ],
        "metadata": Object {
          "description": "Run Jest Tests",
          "help": Object {
            "command": "yarn jest --help",
            "example": Object {
              "options": Object {
                "coverage": true,
              },
            },
          },
          "technologies": Array [
            "jest",
          ],
        },
        "options": Object {
          "cwd": "proj",
          "passWithNoTests": true,
        },
        "outputs": Array [
          "{projectRoot}/coverage",
        ],
      }
    `);

    // bundle-size target should be added when monosize config exists
    expect(targets?.['bundle-size']).toMatchInlineSnapshot(`
      Object {
        "cache": true,
        "command": "yarn monosize measure",
        "inputs": Array [
          "{workspaceRoot}/monosize.config.mjs",
          "{projectRoot}/monosize.config.mjs",
          "{projectRoot}/bundle-size",
          "{projectRoot}/src/**/*.tsx?",
          Object {
            "externalDependencies": Array [
              "monosize",
              "monosize-bundler-webpack",
            ],
          },
        ],
        "metadata": Object {
          "help": Object {
            "command": "yarn monosize measure --help",
            "example": Object {},
          },
          "technologies": Array [
            "monosize",
          ],
        },
        "options": Object {
          "cwd": "proj",
        },
        "outputs": Array [
          "{projectRoot}/dist/bundle-size",
        ],
      }
    `);
  });

  describe(`v9 project nodes`, () => {
    it('should create default nodes for v9 library project having stories project sibling', async () => {
      await tempFs.createFiles({
        'proj/library/project.json': serializeJson({
          root: 'proj',
          name: 'proj',
          projectType: 'library',
          tags: ['v1'],
        } satisfies ProjectConfiguration),
        'proj/library/package.json': serializeJson({
          name: '@proj/proj',
          private: true,
        } satisfies Partial<PackageJson>),
        'proj/stories/project.json': serializeJson({
          root: 'proj/stories',
          name: 'proj-stories',
          tags: ['type:stories', 'v1'],
        } satisfies ProjectConfiguration),
      });
      const results = await createNodesFunction(['proj/library/project.json'], options, context);

      expect(getTargetsNames(results, 'proj/library')).toEqual([
        'clean',
        'format',
        'type-check',
        'generate-api',
        'build',
        'storybook',
        'start',
      ]);
    });

    it('should create default nodes for v9 stories project', async () => {
      await tempFs.createFiles({
        'proj/stories/.storybook/main.js': '',
        'proj/stories/project.json': serializeJson({
          root: 'proj/stories',
          projectType: 'library',
          tags: ['v1', 'type:stories'],
        } satisfies ProjectConfiguration),
        'proj/stories/package.json': serializeJson({
          name: '@proj/proj-stories',
          private: true,
        } satisfies Partial<PackageJson>),
      });
      const results = await createNodesFunction(['proj/stories/project.json'], options, context);

      expect(getTargetsNames(results, 'proj/stories')).toEqual(['clean', 'format', 'type-check', 'storybook', 'start']);

      const targets = getTargets(results, 'proj/stories');

      expect(targets?.storybook).toMatchInlineSnapshot(`
        Object {
          "cache": true,
          "command": "yarn storybook dev",
          "inputs": Array [
            "production",
            "{workspaceRoot}/.storybook/**",
            "{projectRoot}/.storybook/**",
            Object {
              "externalDependencies": Array [
                "storybook",
              ],
            },
          ],
          "metadata": Object {
            "help": Object {
              "command": "yarn storybook dev --help",
              "example": Object {},
            },
            "technologies": Array [
              "storybook",
            ],
          },
          "options": Object {
            "cwd": "proj/stories",
          },
        }
      `);
    });

    describe('generate-api target', () => {
      const v9LibFiles = {
        'proj/project.json': serializeJson({
          root: 'proj',
          name: 'proj',
          projectType: 'library',
          tags: ['v1'],
        } satisfies ProjectConfiguration),
        'proj/package.json': serializeJson({
          name: '@proj/proj',
          private: true,
        } satisfies Partial<PackageJson>),
      };

      async function setupAndGetGenerateApiTarget(extraFiles: Record<string, string> = {}) {
        await tempFs.createFiles({ ...v9LibFiles, ...extraFiles });
        const results = await createNodesFunction(['proj/project.json'], options, context);
        return getTargets(results)?.['generate-api'];
      }

      it('should use default inputs and outputs for a standard v9 library', async () => {
        const target = await setupAndGetGenerateApiTarget();

        expect(target?.inputs).toEqual([
          '{projectRoot}/config/api-extractor.json',
          '{projectRoot}/tsconfig.json',
          '{projectRoot}/tsconfig.lib.json',
          '{projectRoot}/src/**/*.tsx?',
          '{workspaceRoot}/scripts/api-extractor/api-extractor.*.json',
          { externalDependencies: ['@microsoft/api-extractor', 'typescript'] },
        ]);
        expect(target?.outputs).toEqual(['{projectRoot}/dist/index.d.ts', '{projectRoot}/etc/proj.api.md']);
      });

      it('should add glob outputs when user configures exportSubpaths on generate-api target', async () => {
        const extraFiles = {
          'proj/project.json': serializeJson({
            root: 'proj',
            name: 'proj',
            projectType: 'library',
            tags: ['v1'],
            targets: {
              'generate-api': {
                options: {
                  exportSubpaths: true,
                },
              },
            },
          } satisfies ProjectConfiguration),
        };
        await tempFs.createFiles({ ...v9LibFiles, ...extraFiles });
        const results = await createNodesFunction(['proj/project.json'], options, context);
        const targets = getTargets(results);

        const generateApiTarget = targets?.['generate-api'];
        expect(generateApiTarget?.outputs).toEqual(['{projectRoot}/dist/**/*.d.ts', '{projectRoot}/etc/*.api.md']);

        const buildTarget = targets?.build;
        expect(buildTarget?.options?.generateApi).toEqual({ exportSubpaths: true });
        expect(buildTarget?.outputs).toEqual([
          '{projectRoot}/lib',
          '{projectRoot}/lib-commonjs',
          '{projectRoot}/dist',
          '{projectRoot}/etc/*.api.md',
        ]);
      });
    });

    it('should add verify-packaging task only if package is not private', async () => {
      await tempFs.createFiles({
        'proj/project.json': serializeJson({
          root: 'proj',
          projectType: 'library',
          tags: ['v1'],
        } satisfies ProjectConfiguration),
        'proj/package.json': serializeJson({ name: '@proj/proj' } satisfies Partial<PackageJson>),
      });
      const results = await createNodesFunction(['proj/project.json'], options, context);
      const targets = getTargets(results);

      expect(targets?.['verify-packaging']).toMatchInlineSnapshot(`
        Object {
          "executor": "@iqvizyonui/workspace-plugin:verify-packaging",
        }
      `);
    });

    describe('react library project', () => {
      describe('with react in peerDependencies', () => {
        let targets: ReturnType<typeof getTargets>;
        let metadata: ReturnType<typeof getMetadata>;

        beforeEach(async () => {
          await tempFs.createFiles({
            'proj/library/project.json': serializeJson({
              root: 'proj/library',
              name: 'proj',
              projectType: 'library',
              tags: ['v1'],
            } satisfies ProjectConfiguration),
            'proj/library/package.json': serializeJson({
              name: '@proj/proj',
              peerDependencies: { react: '>=16' },
            } satisfies Partial<PackageJson>),
          });
          const results = await createNodesFunction(['proj/library/project.json'], options, context);
          targets = getTargets(results, 'proj/library');
          metadata = getMetadata(results, 'proj/library');
        });

        it('should add react-compiler-analyzer target group', async () => {
          expect(targets?.['react-compiler-analyzer--lint']).toMatchInlineSnapshot(`
            Object {
              "cache": true,
              "command": "yarn react-compiler-analyzer lint ./src",
              "inputs": Array [
                "default",
                Object {
                  "externalDependencies": Array [
                    "babel-plugin-react-compiler",
                  ],
                },
              ],
              "metadata": Object {
                "description": "Lint redundant 'use no memo' directives",
                "help": Object {
                  "command": "yarn react-compiler-analyzer lint --help",
                  "example": Object {
                    "options": Object {
                      "fix": true,
                    },
                  },
                },
                "technologies": Array [
                  "react-compiler",
                ],
              },
              "options": Object {
                "cwd": "proj/library",
              },
            }
          `);

          expect(targets?.['react-compiler-analyzer--analyze']).toMatchInlineSnapshot(`
            Object {
              "cache": true,
              "command": "yarn react-compiler-analyzer analyze ./src",
              "inputs": Array [
                "default",
                Object {
                  "externalDependencies": Array [
                    "babel-plugin-react-compiler",
                  ],
                },
              ],
              "metadata": Object {
                "description": "Analyze React Compiler coverage and migration status",
                "help": Object {
                  "command": "yarn react-compiler-analyzer analyze --help",
                  "example": Object {
                    "options": Object {
                      "annotate": true,
                    },
                  },
                },
                "technologies": Array [
                  "react-compiler",
                ],
              },
              "options": Object {
                "cwd": "proj/library",
              },
            }
          `);

          expect(targets?.['react-compiler-analyzer']).toMatchInlineSnapshot(`
            Object {
              "cache": true,
              "dependsOn": Array [
                "react-compiler-analyzer--lint",
              ],
              "executor": "nx:noop",
              "inputs": Array [
                "default",
                Object {
                  "externalDependencies": Array [
                    "babel-plugin-react-compiler",
                  ],
                },
              ],
              "metadata": Object {
                "description": "React Compiler analysis (runs lint on CI)",
                "help": Object {
                  "command": "yarn react-compiler-analyzer --help",
                  "example": Object {},
                },
                "technologies": Array [
                  "react-compiler",
                ],
              },
            }
          `);

          expect(metadata?.targetGroups).toMatchInlineSnapshot(`
            Object {
              "React Compiler Analyzer": Array [
                "react-compiler-analyzer--lint",
                "react-compiler-analyzer--analyze",
                "react-compiler-analyzer",
              ],
            }
          `);
        });

        it('should not set reactCompiler build option by default', async () => {
          expect(targets?.build.options.reactCompiler).toBeUndefined();
        });
      });

      describe('without react in peerDependencies', () => {
        let targets: ReturnType<typeof getTargets>;

        beforeEach(async () => {
          await tempFs.createFiles({
            'proj/library/project.json': serializeJson({
              root: 'proj/library',
              name: 'proj',
              projectType: 'library',
              tags: ['v1'],
            } satisfies ProjectConfiguration),
            'proj/library/package.json': serializeJson({
              name: '@proj/proj',
              private: true,
            } satisfies Partial<PackageJson>),
          });
          const results = await createNodesFunction(['proj/library/project.json'], options, context);
          targets = getTargets(results, 'proj/library');
        });

        it('should not add react-compiler-analyzer targets', async () => {
          expect(targets?.['react-compiler-analyzer']).toBeUndefined();
          expect(targets?.['react-compiler-analyzer--lint']).toBeUndefined();
          expect(targets?.['react-compiler-analyzer--analyze']).toBeUndefined();
        });

        it('should not set reactCompiler build option', async () => {
          expect(targets?.build.options.reactCompiler).toBeUndefined();
        });
      });
    });
  });
});

function getTargets(results: CreateNodesResultV2, projRoot = 'proj') {
  return results[0][1].projects?.[projRoot].targets;
}
function getMetadata(results: CreateNodesResultV2, projRoot = 'proj') {
  return results[0][1].projects?.[projRoot].metadata;
}
function getTargetsNames(results: CreateNodesResultV2, projRoot = 'proj'): string[] {
  return Object.keys(getTargets(results, projRoot) ?? {});
}
