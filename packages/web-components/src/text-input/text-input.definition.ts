import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './text-input.options.js';
import { styles } from './text-input.styles.js';
import { template } from './text-input.template.js';

/**
 * The definition for the `<iqv-text-input>` element.
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
