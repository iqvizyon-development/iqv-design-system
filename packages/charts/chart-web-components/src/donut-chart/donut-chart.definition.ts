import { IqvizyonDesignSystem } from '@iqvizyonui/web-components';
import type { PartialFASTElementDefinition } from '@microsoft/fast-element';
import { styles } from './donut-chart.styles.js';
import { template } from './donut-chart.template.js';

/**
 * The definition for the `<iqv-donut-chart>` element.
 *
 * @public
 */
export const definition: PartialFASTElementDefinition = {
  name: `${IqvizyonDesignSystem.prefix}-donut-chart`,
  registry: IqvizyonDesignSystem.registry,
  shadowOptions: {
    delegatesFocus: true,
  },
  styles,
  template,
};
