import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './compound-button.options.js';
import { styles } from './compound-button.styles.js';
import { template } from './compound-button.template.js';

/**
 * The definition for the `<iqv-compound-button>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
