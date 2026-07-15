import semver from 'semver';
import { Tree, formatFiles, updateJson, readJson, getProjects } from '@nx/devkit';

import { getNpmScope, getProjectPaths, isPackageVersionPrerelease } from '../../utils';
import type { PackageJson } from '../../types';

export default async function (tree: Tree) {
  const npmScope = getNpmScope(tree);
  const projects = getProjects(tree);

  projects.forEach(project => {
    const projectPaths = getProjectPaths(project);

    updateJson<PackageJson>(tree, projectPaths.packageJson, packageJson => {
      updatedDependencies(tree, { allProjects: projects, packageJson, npmScope });

      return packageJson;
    });
  });

  await formatFiles(tree);
}

function ensureIsInWorkspace(
  tree: Tree,
  projectName: string,
  options: { npmScope: string; allProjects: ReturnType<typeof getProjects> },
) {
  try {
    const npmPackageScope = `@${options.npmScope}/`;
    return projectName.startsWith(npmPackageScope) && options.allProjects.get(projectName.replace(npmPackageScope, ''));
  } catch {
    return null;
  }
}

function updatedDependencies(
  tree: Tree,
  options: {
    allProjects: ReturnType<typeof getProjects>;
    packageJson: PackageJson;
    npmScope: string;
  },
) {
  const { packageJson, allProjects, npmScope } = options;

  updateVersions(packageJson, 'dependencies');
  updateVersions(packageJson, 'devDependencies');
  updateVersions(packageJson, 'peerDependencies');

  return packageJson;

  function updateVersions(json: PackageJson, depType: 'dependencies' | 'devDependencies' | 'peerDependencies') {
    const ignoredVersionRanges = ['*', '>=9.0.0-alpha'];

    const deps = json[depType];
    if (!deps) {
      return;
    }

    // eslint-disable-next-line guard-for-in
    for (const dependencyName in deps) {
      const versionRange = deps[dependencyName];

      if (!versionRange) {
        continue;
      }

      if (ignoredVersionRanges.indexOf(versionRange) !== -1) {
        continue;
      }

      const dependencyProjectConfig = ensureIsInWorkspace(tree, dependencyName, { allProjects, npmScope });

      if (!dependencyProjectConfig) {
        continue;
      }

      const minVersion = semver.minVersion(versionRange);

      if (!minVersion) {
        continue;
      }

      const depPackagePaths = getProjectPaths(dependencyProjectConfig);
      const shouldHaveCaret = !isPackageVersionPrerelease(minVersion.raw) || versionRange[0] === '^';
      const depPackageJson = readJson<PackageJson>(tree, depPackagePaths.packageJson);

      deps[dependencyName] = `${shouldHaveCaret ? '^' : ''}${depPackageJson.version}`;
    }

    return deps;
  }
}
