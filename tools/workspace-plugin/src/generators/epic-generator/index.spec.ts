import { addProjectConfiguration, ProjectType, stripIndents, writeJson } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { execSync, spawnSync, SpawnSyncReturns } from 'child_process';
import { workspacePaths } from '../../utils';
import epicGenerator from './index';

jest.mock('child_process');
const execSyncMock = execSync as unknown as jest.Mock<string>;
const spawnSyncMock = spawnSync as unknown as jest.Mock<Partial<SpawnSyncReturns<string[]>>>;

type Package = {
  name: string;
  version: string;
  projectType: ProjectType;
  owners: string[];
};

function setupTest(packages: Package[]) {
  const tree = createTreeWithEmptyWorkspace();

  packages.forEach(pckg => {
    writeJson(tree, `packages/${pckg.name}/package.json`, {
      name: pckg.name,
      version: pckg.version,
    });

    addProjectConfiguration(tree, pckg.name, {
      root: `packages/${pckg.name}`,
      projectType: pckg.projectType,
    });
  });

  const codeownersContent = packages
    .map(pckg => {
      const rootPath = pckg.projectType === 'application' ? 'apps' : 'packages';

      return `${rootPath}/${pckg.name} ${pckg.owners.join(' ')}`;
    })
    .join('\n');
  tree.write(workspacePaths.github.codeowners, codeownersContent);

  spawnSyncMock.mockReturnValueOnce({
    output: [['Logged in to github.com']],
  });

  execSyncMock.mockReturnValueOnce('epicUrl');

  packages
    .filter(pckg => pckg.projectType === 'library')
    .flatMap(pckg => (pckg.owners.length > 0 ? pckg.owners : ['unknown']))
    .reduce<string[]>((acc, owner) => {
      if (owner.includes('/') && !acc.includes(owner)) {
        acc.push(owner);
      }

      return acc;
    }, [])
    .forEach(owner => {
      execSyncMock.mockReturnValueOnce(`issueUrl-${owner}`);
    });

  execSyncMock.mockReturnValueOnce('epicUrl');

  return tree;
}

describe('epic-generator', () => {
  beforeEach(() => {
    jest.restoreAllMocks();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  describe('validation', () => {
    it('requires a non-empty title', () => {
      const tree = createTreeWithEmptyWorkspace();

      expect(() =>
        epicGenerator(tree, { title: ' ', repository: 'iBz-04/iqvui' }),
      ).toThrowErrorMatchingInlineSnapshot(`"Must provide a title for the issue"`);
    });

    it('requires a well formatted repository', () => {
      const tree = createTreeWithEmptyWorkspace();

      expect(() => epicGenerator(tree, { title: 'test title', repository: 'invalid_repo' }))
        .toThrowErrorMatchingInlineSnapshot(`
        "You provided \\"invalid_repo\\", which is an invalid repository name.
        Please follow the format {owner}/{repositoryName}."
      `);
    });
  });

  describe('authentication', () => {
    it('requires gh to be installed', () => {
      spawnSyncMock.mockReturnValueOnce({
        error: new Error('command not found.'),
      });
      const tree = createTreeWithEmptyWorkspace();

      expect(() => epicGenerator(tree, { title: 'test title', repository: 'iBz-04/iqvui' }))
        .toThrowErrorMatchingInlineSnapshot(`
        "Error calling GitHub CLI (gh). Please make sure it's installed correctly.
        command not found."
      `);
    });

    it('requires you to have logged in with gh', () => {
      spawnSyncMock.mockReturnValueOnce({
        output: [['You are not logged into any GitHub hosts. Run gh auth login to authenticate.']],
      });

      const tree = createTreeWithEmptyWorkspace();

      expect(() =>
        epicGenerator(tree, { title: 'test title', repository: 'iBz-04/iqvui' }),
      ).toThrowErrorMatchingInlineSnapshot(`"You are not logged into GitHub CLI (gh)."`);
    });
  });

  describe('issue generation', () => {
    it('handles a real life scenario', () => {
      const packages: Package[] = [
        {
          name: 'public-docsite',
          version: '9.0.0',
          projectType: 'application',
          owners: ['@iqvizyon/docs'],
        },
        {
          name: 'react-link',
          version: '9.0.0',
          projectType: 'library',
          owners: ['@iqvizyon/components', '@alice', '@iqvizyon/design'],
        },
        {
          name: 'react-card',
          version: '9.0.0',
          projectType: 'library',
          owners: ['@iqvizyon/layout'],
        },
        {
          name: 'react',
          version: '8.0.0',
          projectType: 'library',
          owners: ['@iqvizyon/components'],
        },
        {
          name: 'react-menu',
          version: '9.0.0',
          projectType: 'library',
          owners: ['@iqvizyon/navigation'],
        },
        {
          name: 'react-button',
          version: '9.0.0',
          projectType: 'library',
          owners: ['@iqvizyon/components', '@alice'],
        },
        {
          name: 'misterious-unowned-package',
          version: '9.0.0',
          projectType: 'library',
          owners: [],
        },
        {
          name: 'react-slider',
          version: '9.0.0',
          projectType: 'library',
          owners: ['@iqvizyon/design', '@bob'],
        },
        {
          name: 'vr-tests',
          version: '9.0.0',
          projectType: 'application',
          owners: ['@iqvizyon/react'],
        },
        {
          name: 'react-accordion',
          version: '9.0.0',
          projectType: 'library',
          owners: ['@iqvizyon/navigation', '@iqvizyon/design'],
        },
      ];
      const tree = setupTest(packages);

      const effectsCall = epicGenerator(tree, {
        title: 'test title',
        repository: 'cool-company/repository',
      });
      effectsCall();

      expect(execSyncMock).toHaveBeenNthCalledWith(
        1,
        stripIndents`gh issue create --repo "cool-company/repository" --title "test title" --body "*Description to be added*"`,
      );

      expect(execSyncMock).toHaveBeenNthCalledWith(
        2,
        stripIndents`gh issue create --repo "cool-company/repository" --title "test title - @iqvizyon/components" --body "🚧 This is an auto-generated issue to individually track migration progress.

        ### Packages to migrate:
        - react-link
        - react-button"`,
      );
      expect(execSyncMock).toHaveBeenNthCalledWith(
        3,
        stripIndents`gh issue create --repo "cool-company/repository" --title "test title - @iqvizyon/layout" --body "🚧 This is an auto-generated issue to individually track migration progress.

        ### Packages to migrate:
        - react-card"`,
      );
      expect(execSyncMock).toHaveBeenNthCalledWith(
        4,
        stripIndents`gh issue create --repo "cool-company/repository" --title "test title - @iqvizyon/navigation" --body "🚧 This is an auto-generated issue to individually track migration progress.

        ### Packages to migrate:
        - react-menu
        - react-accordion"`,
      );
      expect(execSyncMock).toHaveBeenNthCalledWith(
        5,
        stripIndents`gh issue create --repo "cool-company/repository" --title "test title - ownerless" --body "🚧 This is an auto-generated issue to individually track migration progress.

        ### Packages to migrate:
        - misterious-unowned-package"`,
      );
      expect(execSyncMock).toHaveBeenNthCalledWith(
        6,
        stripIndents`gh issue create --repo "cool-company/repository" --title "test title - @iqvizyon/design" --body "🚧 This is an auto-generated issue to individually track migration progress.

        ### Packages to migrate:
        - react-slider"`,
      );

      expect(execSyncMock).toHaveBeenNthCalledWith(
        7,
        stripIndents`gh issue edit epicUrl --body "*Description to be added*

        ### Packages that need migration:
        - [ ] issueUrl-@iqvizyon/components
          - react-link
          - react-button
        - [ ] issueUrl-@iqvizyon/design
          - react-card
        - [ ] issueUrl-@iqvizyon/layout
          - react-menu
          - react-accordion
        - [ ] issueUrl-@iqvizyon/navigation
          - misterious-unowned-package
        - [ ] epicUrl
          - react-slider"`,
      );
    });
  });
});
