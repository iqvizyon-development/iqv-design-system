const semver = require('semver');

/**
 *
 * @param {{project:import('@nx/devkit').ProjectConfiguration;packageJson:import('nx/src/utils/package-json').PackageJson}} metadata
 */
function isConvergedPackage(metadata) {
  const { packageJson, project } = metadata;
  const hasV1Tag = Boolean(project.tags?.includes('v1'));

  return semver.major(packageJson.version) >= 9 || isNightlyVersion(packageJson.version) || hasV1Tag;
}

/**
 * Determines if a version is the 0.0.0 nightly version used by converged packages
 * @param {string} version
 */
function isNightlyVersion(version) {
  return semver.major(version) === 0 && semver.minor(version) === 0 && semver.patch(version) === 0;
}

exports.isConvergedPackage = isConvergedPackage;
