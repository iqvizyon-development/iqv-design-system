import { declarativeTemplate, type PartialFASTElementDefinition } from '@microsoft/fast-element/declarative.js';
import { IqvizyonDesignSystem } from '../iqvizyon-design-system.js';
import { tagName } from './label.options.js';

/**
 * The async definition configuration for the `<iqv-label>` element.
 *
 * @public
 * @remarks
 * This is used in server-side rendering (SSR) scenarios where the template
 * is provided as a deferred option to be hydrated later.
 */
export const declarativeDefinition: PartialFASTElementDefinition = {
  name: tagName,
  registry: IqvizyonDesignSystem.registry,
  template: declarativeTemplate(),
};
