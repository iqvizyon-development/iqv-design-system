import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './message-bar.options.js';
import { styles } from './message-bar.styles.js';
import { template } from './message-bar.template.js';

/**
 * The definition for the `<iqv-message-bar>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
