/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { CarouselNavButtonState, CarouselNavButtonSlots } from './CarouselNavButton.types';

/**
 * Render the final JSX of CarouselNavButton
 */
export const renderCarouselNavButton_unstable = (state: CarouselNavButtonState): JSXElement => {
  assertSlots<CarouselNavButtonSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <state.root />;
};
