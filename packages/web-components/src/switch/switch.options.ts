import type { ValuesOf } from '../utils/typings.js';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';

/**
 * SwitchLabelPosition Constants
 * @public
 */
export const SwitchLabelPosition = {
  above: 'above',
  after: 'after',
  before: 'before',
} as const;

/**
 * Applies label position
 * @public
 */
export type SwitchLabelPosition = ValuesOf<typeof SwitchLabelPosition>;

/**
 * The tag name for the switch element.
 *
 * @public
 */
export const tagName = `${IqvizyonDesignSystem.prefix}-switch` as const;
