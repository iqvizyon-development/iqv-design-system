import { getAllPackageInfo, isConvergedPackage } from '@iqvizyonui/scripts-monorepo';

/**
 * Reads package info from the monorepo and generates the scopes for beachball bump and release.
 * Generates the v1, tools, and web component release scopes.
 * @returns {string[]} Array of package paths for beachball scope
 */
export function getConfig({ version }: { version: 'web-components' }): { scope: string[] };
export function getConfig({ version }: { version: 'tools' }): { scope: string[] };
export function getConfig({ version }: { version: 'v1' }): {
  scope: string[];
  groupConfig: {
    masterPackageName: string;
    changelogPath: string;
    include: string[];
  };
};
export function getConfig({ version }: { version: 'v1' | 'web-components' | 'tools' }) {
  const { v1Paths, webComponentsPaths, toolsPaths } = getPackagePaths();

  if (version === 'v1') {
    return {
      scope: [...v1Paths],
      groupConfig: {
        masterPackageName: '@iqvizyonui/react-components',
        changelogPath: 'packages/react-components/react-components',
        include: v1Paths,
      },
    };
  }

  if (version === 'web-components') {
    return {
      scope: [...webComponentsPaths],
    };
  }

  if (version === 'tools') {
    return {
      scope: [...toolsPaths],
    };
  }

  throw new Error('Unsupported version scopes acquisition');
}

const isWebComponentPackage: typeof isConvergedPackage = metadata => {
  return Boolean(metadata.project.tags?.includes('web-components'));
};

const isToolsPackage: typeof isConvergedPackage = metadata => {
  const hasToolsTag = Boolean(metadata.project.tags?.includes('tools'));
  const isPrivate = Boolean(metadata.packageJson.private);

  return hasToolsTag && !isPrivate;
};

function getPackagePaths() {
  const allProjects = getAllPackageInfo();
  const v1Paths: string[] = [];
  const webComponentsPaths: string[] = [];
  const toolsPaths: string[] = [];

  for (const project of Object.values(allProjects)) {
    const isPrivate = Boolean(project.packageJson.private);
    const metadata = { project: project.projectConfig, packageJson: project.packageJson };
    if (isConvergedPackage(metadata) && !isToolsPackage(metadata) && !isPrivate) {
      v1Paths.push(project.packagePath);
    }
    if (isWebComponentPackage(metadata)) {
      webComponentsPaths.push(project.packagePath);
    }
    if (isToolsPackage(metadata)) {
      toolsPaths.push(project.packagePath);
    }
  }

  return { v1Paths, webComponentsPaths, toolsPaths };
}
