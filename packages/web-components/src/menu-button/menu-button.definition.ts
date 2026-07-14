import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './menu-button.options.js';
import { styles } from './menu-button.styles.js';
import { template } from './menu-button.template.js';

/**
 * The definition for the `<iqv-menu-button>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
