import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './menu-item.options.js';
import { styles } from './menu-item.styles.js';
import { template } from './menu-item.template.js';

/**
 * The definition for the `<iqv-menu-item>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
