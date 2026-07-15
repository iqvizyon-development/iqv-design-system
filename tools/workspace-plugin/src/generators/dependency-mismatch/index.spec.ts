import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, addProjectConfiguration, readJson, writeJson } from '@nx/devkit';
import { getWorkspaceConfig } from '../../utils';

import generator from './index';
import { PackageJson } from '../../types';

describe('dependency-mismatch generator', () => {
  let tree: Tree;
  let workspaceNpmScope: string;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    workspaceNpmScope = getWorkspaceConfig(tree).npmScope;
  });

  it(`should ignore dependencies that use  * and >=9.0.0-alpha version range`, async () => {
    const { readPackageJson: readTargetPackageJson } = setupDummyPackage(tree, 'react-docsite', {
      version: '9.0.0',
      dependencies: {
        [`@${workspaceNpmScope}/react-one`]: '*',
        [`@${workspaceNpmScope}/react-two`]: '>=9.0.0-alpha',
      },
      devDependencies: {},
      peerDependencies: {},
    });

    setupDummyPackage(tree, 'react-one', {
      version: '0.2.33',
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
    setupDummyPackage(tree, 'react-two', {
      version: '0.1.12',
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });

    await generator(tree);

    const packageJson = readTargetPackageJson();
    expect(packageJson.dependencies).toEqual({
      '@proj/react-one': '*',
      '@proj/react-two': '>=9.0.0-alpha',
    });
  });

  it('should fix dependency mismatch', async () => {
    const { readPackageJson: readTargetPackageJson } = setupDummyPackage(tree, 'react-docsite', {
      version: '9.0.0',
      dependencies: {
        [`@${workspaceNpmScope}/react-theme`]: '^9.0.0',
      },
      devDependencies: {},
      peerDependencies: {},
    });

    setupDummyPackage(tree, 'react-theme', {
      version: '9.0.1',
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
    await generator(tree);

    const packageJson: PackageJson = readTargetPackageJson();
    expect(packageJson.dependencies).toMatchInlineSnapshot(`
      Object {
        "@proj/react-theme": "^9.0.1",
      }
    `);
  });

  it('should fix dev dependencies', async () => {
    const { readPackageJson: readTargetPackageJson } = setupDummyPackage(tree, 'react-docsite', {
      version: '9.0.0',
      devDependencies: {
        [`@${workspaceNpmScope}/react-theme`]: '^9.0.0',
      },
      dependencies: {},
      peerDependencies: {},
    });

    setupDummyPackage(tree, 'react-theme', {
      version: '9.0.1',
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
    await generator(tree);

    const packageJson: PackageJson = readTargetPackageJson();
    expect(packageJson.devDependencies).toMatchInlineSnapshot(`
      Object {
        "@proj/react-theme": "^9.0.1",
      }
    `);
  });

  it('should fix peer dependencies', async () => {
    const { readPackageJson: readTargetPackageJson } = setupDummyPackage(tree, 'react-docsite', {
      version: '9.0.0',
      peerDependencies: {
        [`@${workspaceNpmScope}/react-theme`]: '^9.0.0',
      },
      dependencies: {},
      devDependencies: {},
    });

    setupDummyPackage(tree, 'react-theme', {
      version: '9.0.1',
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
    await generator(tree);

    const packageJson: PackageJson = readTargetPackageJson();
    expect(packageJson.peerDependencies).toMatchInlineSnapshot(`
      Object {
        "@proj/react-theme": "^9.0.1",
      }
    `);
  });

  it('should not add carets to prerelease dependencies that do not already have it specified', async () => {
    const { readPackageJson: readTargetPackageJson } = setupDummyPackage(tree, 'react-docsite', {
      version: '9.0.0',
      dependencies: {
        [`@${workspaceNpmScope}/react-select`]: '^9.0.0-beta.1',
        [`@${workspaceNpmScope}/react-spinbutton`]: '9.0.0-beta.1',
      },
      devDependencies: {},
      peerDependencies: {},
    });

    setupDummyPackage(tree, 'react-select', {
      version: '9.0.0-beta.2',
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
    setupDummyPackage(tree, 'react-spinbutton', {
      version: '9.0.0-beta.2',
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
    await generator(tree);

    const packageJson = readTargetPackageJson();
    expect(packageJson.dependencies).toMatchInlineSnapshot(`
      Object {
        "@proj/react-select": "^9.0.0-beta.2",
        "@proj/react-spinbutton": "9.0.0-beta.2",
      }
    `);
  });

  it('should fix workspace dependencies for any package', async () => {
    const { readPackageJson: readTargetPackageJson } = setupDummyPackage(tree, 'react-utilities', {
      version: '9.0.0',
      dependencies: {
        [`@${workspaceNpmScope}/react-portal-compat-context`]: '^9.0.0',
      },
      devDependencies: {},
      peerDependencies: {},
    });

    setupDummyPackage(tree, 'react-portal-compat-context', {
      version: '9.0.1',
      dependencies: {},
      devDependencies: {},
      peerDependencies: {},
    });
    await generator(tree);

    const packageJson = readTargetPackageJson();
    expect(packageJson.dependencies).toMatchInlineSnapshot(`
      Object {
        "@proj/react-portal-compat-context": "^9.0.1",
      }
    `);
  });

  it('should ignore 3rd party packages/dependencies', async () => {
    const { readPackageJson: readTargetPackageJson } = setupDummyPackage(tree, 'react-utilities', {
      version: '9.0.0',
      dependencies: {
        [`@${workspaceNpmScope}/tslib`]: '^2.1.1',
      },
      devDependencies: {},
      peerDependencies: {},
    });

    await generator(tree);

    const packageJson: PackageJson = readTargetPackageJson();
    expect(packageJson.dependencies).toMatchInlineSnapshot(`
      Object {
        "@proj/tslib": "^2.1.1",
      }
    `);
  });
});

function setupDummyPackage(
  tree: Tree,
  projectName: string,
  packageJson: {
    version: string;
    devDependencies: Record<string, string>;
    dependencies: Record<string, string>;
    peerDependencies: Record<string, string>;
  },
  tags: string[] = [],
) {
  const workspaceConfig = getWorkspaceConfig(tree);

  const npmPackageName = `@${workspaceConfig.npmScope}/${projectName}`;
  const rootPath = `packages/${projectName}`;

  const templates = {
    packageJson: {
      ...packageJson,
      name: npmPackageName,
    },
  };

  const packageJsonPath = `${rootPath}/package.json`;
  writeJson(tree, packageJsonPath, templates.packageJson);

  addProjectConfiguration(tree, projectName, {
    root: rootPath,
    projectType: 'library',
    targets: {},
    tags: ['platform:web', ...tags],
  });

  return {
    readPackageJson: () => readJson<PackageJson>(tree, packageJsonPath),
  };
}
