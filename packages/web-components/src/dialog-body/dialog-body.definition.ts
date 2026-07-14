import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './dialog-body.options.js';
import { styles } from './dialog-body.styles.js';
import { template } from './dialog-body.template.js';

/**
 * The definition for the `<iqv-dialog-body>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  styles,
  template,
};
