import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './radio-group.options.js';
import { styles } from './radio-group.styles.js';
import { template } from './radio-group.template.js';

/**
 * The definition for the `<iqv-radio-group>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
