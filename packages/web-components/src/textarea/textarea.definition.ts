import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './textarea.options.js';
import { styles } from './textarea.styles.js';
import { template } from './textarea.template.js';

/**
 * The definition for the `<iqv-textarea>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  shadowOptions: {
    delegatesFocus: true,
  },
  styles,
  template,
};
