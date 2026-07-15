import { isConvergedPackage } from './isConvergedPackage';

describe(`#isConverged`, () => {
  it(`should return true for v1 package`, () => {
    const actual = isConvergedPackage({
      packageJson: {
        name: '@proj/one',
        version: '9.0.0',
      },
      project: { root: 'packages/foo/bar/one', projectType: 'library', tags: ['v1'] },
    });

    expect(actual).toBe(true);
  });

  it(`should return true for v1 nightly package`, () => {
    const actual = isConvergedPackage({
      packageJson: {
        name: '@proj/one',
        version: '0.0.0-nightly.20210101',
      },
      project: { root: 'packages/foo/bar/one', projectType: 'library', tags: ['v1'] },
    });

    expect(actual).toBe(true);
  });

  it(`should return false for non v1 Package`, () => {
    const actual = isConvergedPackage({
      packageJson: {
        name: '@proj/one',
        version: '8.1.2',
      },
      project: { root: 'packages/foo/bar/one', projectType: 'library', tags: ['tools'] },
    });

    expect(actual).toBe(false);
  });
});
