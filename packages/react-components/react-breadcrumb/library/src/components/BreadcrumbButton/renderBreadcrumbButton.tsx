import type { BreadcrumbButtonBaseState } from './BreadcrumbButton.types';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import { renderButton_unstable } from '@iqvizyonui/react-button';

/**
 * Render the final JSX of BreadcrumbButton
 */
export const renderBreadcrumbButton_unstable = (state: BreadcrumbButtonBaseState): JSXElement => {
  return renderButton_unstable(state);
};
