import { IqvizyonDesignSystem } from '@iqvizyonui/web-components';
import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { styles } from './horizontal-bar-chart.styles.js';
import { template } from './horizontal-bar-chart.template.js';

/**
 * The definition for the `<iqv-horizontal-bar-chart>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: `${IqvizyonDesignSystem.prefix}-horizontal-bar-chart`,
  registry: IqvizyonDesignSystem.registry,
  shadowOptions: {
    delegatesFocus: true,
  },
  styles,
  template,
};
