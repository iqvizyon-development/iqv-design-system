import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { CarouselAutoplayButtonState, CarouselAutoplayButtonSlots } from './CarouselAutoplayButton.types';
import { renderToggleButton_unstable } from '@iqvizyonui/react-button';

/**
 * Render the final JSX of CarouselAutoplayButton
 */
export const renderCarouselAutoplayButton_unstable = (state: CarouselAutoplayButtonState): JSXElement => {
  assertSlots<CarouselAutoplayButtonSlots>(state);

  // We render the underlying react-button with injected carousel functionality
  return renderToggleButton_unstable(state);
};
