import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './menu-list.options.js';
import { styles } from './menu-list.styles.js';
import { template } from './menu-list.template.js';

/**
 * The definition for the `<iqv-menu-list>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
