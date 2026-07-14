import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './accordion-item.options.js';
import { styles } from './accordion-item.styles.js';
import { template } from './accordion-item.template.js';

/**
 * The definition configuration for the `<iqv-accordion-item>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
