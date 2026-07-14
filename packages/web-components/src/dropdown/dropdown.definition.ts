import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './dropdown.options.js';
import { styles } from './dropdown.styles.js';
import { template } from './dropdown.template.js';

/**
 * The definition for the `<iqv-dropdown>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
