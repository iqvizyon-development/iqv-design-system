import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { CarouselButtonState, CarouselButtonSlots } from './CarouselButton.types';
import { renderButton_unstable } from '@iqvizyonui/react-button';

/**
 * Render the final JSX of CarouselButton
 */
export const renderCarouselButton_unstable = (state: CarouselButtonState): JSXElement => {
  assertSlots<CarouselButtonSlots>(state);

  // We render the underlying react-button with injected carousel functionality
  return renderButton_unstable(state);
};
