export interface VersionBumpGeneratorSchema {
  /**
   * Library name
   */
  name?: string;

  /**
   * Runs migration for all v1 packages
   */
  all?: boolean;
}
