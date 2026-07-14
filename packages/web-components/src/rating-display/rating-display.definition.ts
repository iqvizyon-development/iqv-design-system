import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './rating-display.options.js';
import { styles } from './rating-display.styles.js';
import { template } from './rating-display.template.js';

/**
 * The definition for the `<iqv-rating-display>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
