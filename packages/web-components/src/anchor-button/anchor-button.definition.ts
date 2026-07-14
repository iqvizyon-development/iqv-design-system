import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './anchor-button.options.js';
import { styles } from './anchor-button.styles.js';
import { template } from './anchor-button.template.js';

/**
 * The definition for the `<iqv-anchor-button>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
