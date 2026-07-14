import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './counter-badge.options.js';
import { styles } from './counter-badge.styles.js';
import { template } from './counter-badge.template.js';

/**
 * The definition for the `<iqv-counter-badge>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
