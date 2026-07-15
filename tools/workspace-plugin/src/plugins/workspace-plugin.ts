/* eslint-disable @typescript-eslint/no-shadow */

import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import {
  type CreateNodesContextV2,
  type CreateNodesResult,
  type CreateNodesV2,
  type ProjectConfiguration,
  type TargetConfiguration,
  createNodesFromFiles,
  getPackageManagerCommand,
  readJsonFile,
} from '@nx/devkit';
import { type RunCommandsOptions } from 'nx/src/executors/run-commands/run-commands.impl';
import { type Config as JestConfig } from '@jest/types';

import { type PackageJson } from '../types';
import { type BuildExecutorSchema } from '../executors/build/schema';

import { assertProjectExists, projectConfigGlob } from './shared';
import { buildCleanTarget } from './clean-plugin';
import { buildFormatTarget } from './format-plugin';
import { buildTypeCheckTarget } from './type-check-plugin';
import { measureStart, measureEnd } from '../utils';

export interface WorkspacePluginOptions {
  verifyPackaging?: TargetPluginOption;
}
interface TargetPluginOption {
  targetName?: string;
  /**
   * project names to exclude from adding target
   */
  exclude?: string[];
  /**
   * project names to include for adding target
   */
  include?: string[];
}

export const createNodesV2: CreateNodesV2<WorkspacePluginOptions> = [
  projectConfigGlob,
  async (configFiles, options, context) => {
    const globalConfig: Pick<TaskBuilderConfig, 'pmc'> = { pmc: getPackageManagerCommand('yarn') };

    measureStart('workspace-plugin');
    const nodes = await createNodesFromFiles(
      (configFile, options, context) => {
        return createNodesInternal(configFile, options ?? {}, context, globalConfig);
      },
      configFiles,
      options,
      context,
    );

    measureEnd('workspace-plugin');

    return nodes;
  },
];

// ===================================================================================================================
type NormalizedOptions = ReturnType<typeof normalizeOptions>;

type DeepRequired<T> = {
  [K in keyof T]-?: NonNullable<T[K]> extends object ? DeepRequired<T[K]> : NonNullable<T[K]>;
};

function normalizeOptions(options: WorkspacePluginOptions | undefined): DeepRequired<WorkspacePluginOptions> {
  options ??= {};

  options.verifyPackaging ??= {};
  options.verifyPackaging.targetName ??= 'verify-packaging';
  options.verifyPackaging.include ??= [];
  options.verifyPackaging.exclude ??= [];

  return options as DeepRequired<WorkspacePluginOptions>;
}

function createNodesInternal(
  configFilePath: string,
  options: WorkspacePluginOptions,
  context: CreateNodesContextV2,
  globalConfig: Pick<TaskBuilderConfig, 'pmc'>,
): CreateNodesResult {
  const projectRoot = dirname(configFilePath);

  if (!assertProjectExists(projectRoot, context)) {
    return {};
  }

  const normalizedOptions = normalizeOptions(options);

  const taskBuilderConfig = getTaskBuilderConfig(projectRoot, globalConfig.pmc);

  const workspaceConfig = buildWorkspaceProjectConfiguration(
    projectRoot,
    normalizedOptions,
    context,
    taskBuilderConfig,
  );

  return {
    projects: {
      [projectRoot]: {
        targets: workspaceConfig.targets,
        metadata: workspaceConfig.metadata,
      },
    },
  };
}

interface TaskBuilderConfig {
  projectJSON: ProjectConfiguration;
  packageJSON: PackageJson;
  pmc: ReturnType<typeof getPackageManagerCommand>;
  tags: string[];
}

type WorkspaceTargets = Pick<ProjectConfiguration, 'targets' | 'metadata'>;

function getTaskBuilderConfig(projectRoot: string, pmc: TaskBuilderConfig['pmc']): TaskBuilderConfig {
  const projectJSON: ProjectConfiguration = readJsonFile(join(projectRoot, 'project.json'));
  const packageJSON: PackageJson = readJsonFile(join(projectRoot, 'package.json'));

  const tags = projectJSON.tags ?? [];
  const config = { projectJSON, packageJSON, pmc, tags };
  return config;
}

function buildWorkspaceProjectConfiguration(
  projectRoot: string,
  options: NormalizedOptions,
  context: CreateNodesContextV2,
  config: TaskBuilderConfig,
): WorkspaceTargets {
  const targets: Record<string, TargetConfiguration> = {};

  targets.clean = buildCleanTarget({}, context, config);
  targets.format = buildFormatTarget({}, context, config);
  targets['type-check'] = buildTypeCheckTarget({}, context, config);

  const lintTarget = buildLintTarget(projectRoot, options, context, config);
  if (lintTarget) {
    targets.lint = lintTarget;
  }

  const testTarget = buildTestTarget(projectRoot, options, context, config);
  if (testTarget) {
    targets.test = testTarget;
  }

  const storybookTarget = buildStorybookTarget(projectRoot, options, context, config);
  if (storybookTarget) {
    targets.storybook = storybookTarget;
  }

  const bundleSizeTarget = buildBundleSizeTarget(projectRoot, options, context, config);
  if (bundleSizeTarget) {
    targets['bundle-size'] = bundleSizeTarget;
  }

  // react v1 lib
  if (config.projectJSON.projectType === 'library' && config.tags.includes('v1')) {
    // *-stories projects
    if (config.tags.includes('type:stories')) {
      if (storybookTarget) {
        targets.start = { command: `nx run ${config.projectJSON.name}:storybook`, cache: true };
      }

      return { targets };
    }

    // library

    targets['generate-api'] = buildGenerateApiTarget(projectRoot, config);

    const { value: userExportSubpaths, enabled: userEnabledExportSubpaths } = resolveExportSubpathsOption(config);

    const isReactProject = Boolean(config.packageJSON.peerDependencies?.react);

    targets.build = {
      cache: true,
      executor: '@iqvizyonui/workspace-plugin:build',
      options: {
        sourceRoot: 'src',
        outputPathRoot: `{projectRoot}`,
        moduleOutput: [
          { module: 'es6', outputPath: 'lib' },
          { module: 'commonjs', outputPath: 'lib-commonjs' },
          config.tags.includes('ships-amd') ? { module: 'amd', outputPath: 'lib-amd' } : null,
        ].filter(Boolean) as BuildExecutorSchema['moduleOutput'],
        enableGriffelRawStyles: true,
        ...(userEnabledExportSubpaths ? { generateApi: { exportSubpaths: userExportSubpaths } } : null),
        // NOTE: assets should be set per project needs
        // assets: [],
      } satisfies BuildExecutorSchema,

      // NOTE:
      //  https://nx.dev/recipes/running-tasks/configure-inputs#workspace-level-inputs
      //  these are overridden with anything that exists in nx.json#targetDefaults#build#input
      inputs: [
        '{projectRoot}/package.json',
        '{projectRoot}/.swcrc',
        ...targets['generate-api'].inputs!,
        {
          externalDependencies: ['@swc/core', '@microsoft/api-extractor', 'typescript', 'babel-plugin-react-compiler'],
        },
      ],
      outputs: [
        `{projectRoot}/lib`,
        `{projectRoot}/lib-commonjs`,
        config.tags.includes('ships-amd') ? `{projectRoot}/lib-amd` : null,
        `{projectRoot}/dist`,
        // only spread etc/ outputs from generate-api (dist/ is already covered by {projectRoot}/dist above)
        ...targets['generate-api'].outputs!.filter(outputPath => !outputPath.startsWith('{projectRoot}/dist')),
      ].filter(Boolean) as string[],
      metadata: {
        technologies: ['swc', 'typescript', 'api-extractor'],
        help: {
          command: `${config.pmc.exec} nx run ${config.projectJSON.name}:build --help`,
          example: {},
        },
      },
    };

    if (existsSync(join(projectRoot, '../stories/project.json'))) {
      const storybookTarget = { command: `nx run ${config.projectJSON.name}-stories:storybook`, cache: true };

      targets.storybook = storybookTarget;
      targets.start = storybookTarget;
    }

    const verifyPackagingTarget = buildVerifyPackagingTarget(projectRoot, options, context, config);
    if (verifyPackagingTarget) {
      targets[options.verifyPackaging.targetName] = verifyPackagingTarget;
    }

    let metadata: WorkspaceTargets['metadata'];

    if (isReactProject) {
      const rcaConfig = buildReactCompilerAnalyzerTargets(projectRoot, options, context, config);
      Object.assign(targets, rcaConfig.targets);
      metadata = rcaConfig.metadata;
    }

    return { targets, metadata };
  }

  return { targets };
}

function buildReactCompilerAnalyzerTargets(
  projectRoot: string,
  options: Required<WorkspacePluginOptions>,
  context: CreateNodesContextV2,
  config: TaskBuilderConfig,
): WorkspaceTargets {
  const targets: Record<string, TargetConfiguration> = {};
  const groupName = 'React Compiler Analyzer';
  const metadata = { targetGroups: { [groupName]: [] as string[] } };

  const inputs = ['default', { externalDependencies: ['babel-plugin-react-compiler'] }];

  targets['react-compiler-analyzer--lint'] = {
    command: `${config.pmc.exec} react-compiler-analyzer lint ./src`,
    options: { cwd: projectRoot },
    cache: true,
    inputs,
    metadata: {
      technologies: ['react-compiler'],
      description: "Lint redundant 'use no memo' directives",
      help: {
        command: `${config.pmc.exec} react-compiler-analyzer lint --help`,
        example: {
          options: {
            fix: true,
          },
        },
      },
    },
  };

  targets['react-compiler-analyzer--analyze'] = {
    command: `${config.pmc.exec} react-compiler-analyzer analyze ./src`,
    options: { cwd: projectRoot },
    cache: true,
    inputs,
    metadata: {
      technologies: ['react-compiler'],
      description: 'Analyze React Compiler coverage and migration status',
      help: {
        command: `${config.pmc.exec} react-compiler-analyzer analyze --help`,
        example: {
          options: {
            annotate: true,
          },
        },
      },
    },
  };

  targets['react-compiler-analyzer'] = {
    executor: 'nx:noop',
    cache: true,
    dependsOn: ['react-compiler-analyzer--lint'],
    inputs,
    metadata: {
      technologies: ['react-compiler'],
      description: 'React Compiler analysis (runs lint on CI)',
      help: {
        command: `${config.pmc.exec} react-compiler-analyzer --help`,
        example: {},
      },
    },
  };

  metadata.targetGroups[groupName].push(...Object.keys(targets));

  return { targets, metadata };
}

function resolveExportSubpathsOption(config: TaskBuilderConfig): {
  value: boolean | { apiReport?: boolean };
  enabled: boolean;
} {
  const value = config.projectJSON.targets?.['generate-api']?.options?.exportSubpaths;
  const enabled = value === true || (typeof value === 'object' && value !== null);
  return { value, enabled };
}

function buildGenerateApiTarget(projectRoot: string, config: TaskBuilderConfig): TargetConfiguration {
  const { enabled: hasExportSubpaths } = resolveExportSubpathsOption(config);

  return {
    cache: true,
    executor: '@iqvizyonui/workspace-plugin:generate-api',
    inputs: [
      '{projectRoot}/config/api-extractor.json',
      '{projectRoot}/tsconfig.json',
      '{projectRoot}/tsconfig.lib.json',
      '{projectRoot}/src/**/*.tsx?',
      // trigger affected or cache invalidation on generate-api target if scripts-api-extractor changed
      '{workspaceRoot}/scripts/api-extractor/api-extractor.*.json',
      { externalDependencies: ['@microsoft/api-extractor', 'typescript'] },
    ],
    // When exportSubpaths is enabled, use broad globs for outputs
    // — the executor resolves exact paths at runtime.
    outputs: hasExportSubpaths
      ? ['{projectRoot}/dist/**/*.d.ts', '{projectRoot}/etc/*.api.md']
      : [`{projectRoot}/dist/index.d.ts`, `{projectRoot}/etc/${config.projectJSON.name}.api.md`],
    metadata: {
      technologies: ['typescript', 'api-extractor'],
      help: {
        command: `${config.pmc.exec} nx run ${config.projectJSON.name}:generate-api --help`,
        example: {},
      },
    },
  };
}

function buildTestTarget(
  projectRoot: string,
  options: Required<WorkspacePluginOptions>,
  context: CreateNodesContextV2,
  config: TaskBuilderConfig,
): TargetConfiguration<JestConfig.InitialOptions & Pick<RunCommandsOptions, 'cwd'>> | null {
  if (!existsSync(join(projectRoot, 'jest.config.js')) && !existsSync(join(projectRoot, 'jest.config.ts'))) {
    return null;
  }

  return {
    command: `${config.pmc.exec} jest`,
    options: { cwd: projectRoot, passWithNoTests: true },
    cache: true,
    inputs: ['default', '^production', '{workspaceRoot}/jest.preset.js', { externalDependencies: ['jest'] }],
    outputs: ['{projectRoot}/coverage'],
    metadata: {
      technologies: ['jest'],
      description: 'Run Jest Tests',
      help: {
        command: `${config.pmc.exec} jest --help`,
        example: {
          options: {
            coverage: true,
          },
        },
      },
    },
  };
}

function buildLintTarget(
  projectRoot: string,
  options: Required<WorkspacePluginOptions>,
  context: CreateNodesContextV2,
  config: TaskBuilderConfig,
): TargetConfiguration | null {
  const hasEslintConfig =
    existsSync(join(projectRoot, 'eslint.config.js')) ||
    existsSync(join(projectRoot, 'eslint.config.cjs')) ||
    existsSync(join(projectRoot, 'eslint.config.mjs'));

  if (!hasEslintConfig) {
    return null;
  }

  return {
    executor: 'nx:run-commands',
    cache: true,
    options: { cwd: projectRoot, command: `${config.pmc.exec} eslint src` },
    inputs: [
      'default',
      '{projectRoot}/eslint.{js,cjs,mjs}',
      '{workspaceRoot}/eslint.config.{js,cjs,mjs}',
      { externalDependencies: ['eslint'] },
    ],
    outputs: ['{options.outputFile}'],
    metadata: {
      description: 'Runs ESLint on project',
      technologies: ['eslint'],
      help: {
        command: `${config.pmc.exec} eslint --help`,
        example: {
          options: {
            'max-warnings': 0,
          },
        },
      },
    },
  };
}

function buildVerifyPackagingTarget(
  projectRoot: string,
  options: NormalizedOptions,
  context: CreateNodesContextV2,
  config: TaskBuilderConfig,
): TargetConfiguration | null {
  if (options.verifyPackaging.include.length && !options.verifyPackaging.include.includes(config.projectJSON.name!)) {
    return null;
  }
  if (options.verifyPackaging.exclude.length && options.verifyPackaging.exclude.includes(config.projectJSON.name!)) {
    return null;
  }

  if (config.packageJSON.private) {
    return null;
  }

  return {
    executor: '@iqvizyonui/workspace-plugin:verify-packaging',
  };
}

function buildBundleSizeTarget(
  projectRoot: string,
  options: Required<WorkspacePluginOptions>,
  context: CreateNodesContextV2,
  config: TaskBuilderConfig,
): TargetConfiguration | null {
  const hasMonosize =
    existsSync(join(projectRoot, 'bundle-size')) || existsSync(join(projectRoot, 'monosize.config.mjs'));

  if (!hasMonosize) {
    return null;
  }

  return {
    cache: true,
    command: `${config.pmc.exec} monosize measure`,
    options: { cwd: projectRoot },
    inputs: [
      `{workspaceRoot}/monosize.config.mjs`,
      `{projectRoot}/monosize.config.mjs`,
      `{projectRoot}/bundle-size`,
      `{projectRoot}/src/**/*.tsx?`,
      { externalDependencies: ['monosize', 'monosize-bundler-webpack'] },
    ],
    outputs: ['{projectRoot}/dist/bundle-size'],
    metadata: {
      technologies: ['monosize'],
      help: {
        command: `${config.pmc.exec} monosize measure --help`,
        example: {},
      },
    },
  };
}

function buildStorybookTarget(
  projectRoot: string,
  options: NormalizedOptions,
  context: CreateNodesContextV2,
  config: TaskBuilderConfig,
): TargetConfiguration | null {
  if (!existsSync(join(projectRoot, '.storybook/main.js'))) {
    return null;
  }

  return {
    command: `${config.pmc.exec} storybook dev`,
    cache: true,
    inputs: [
      'production',
      '{workspaceRoot}/.storybook/**',
      '{projectRoot}/.storybook/**',
      { externalDependencies: ['storybook'] },
    ],
    options: { cwd: projectRoot },
    metadata: {
      technologies: ['storybook'],
      help: {
        command: `${config.pmc.exec} storybook dev --help`,
        example: {},
      },
    },
  };
}

