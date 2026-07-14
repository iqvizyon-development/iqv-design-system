import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './progress-bar.options.js';
import { styles } from './progress-bar.styles.js';
import { template } from './progress-bar.template.js';

/**
 * The definition for the `<iqv-progress-bar>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
