import { Orientation } from '../utils/orientation.js';
import type { ValuesOf } from '../utils/typings.js';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';

/**
 * Radio Group orientation
 * @public
 */
export const RadioGroupOrientation = Orientation;

/**
 * Types of Radio Group orientation
 * @public
 */
export type RadioGroupOrientation = ValuesOf<typeof RadioGroupOrientation>;

/**
 * The tag name for the radio group element.
 *
 * @public
 */
export const tagName = `${IqvizyonDesignSystem.prefix}-radio-group` as const;
