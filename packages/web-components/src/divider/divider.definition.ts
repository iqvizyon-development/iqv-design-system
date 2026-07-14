import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './divider.options.js';
import { styles } from './divider.styles.js';
import { template } from './divider.template.js';

/**
 * The definition for the `<iqv-divider>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
