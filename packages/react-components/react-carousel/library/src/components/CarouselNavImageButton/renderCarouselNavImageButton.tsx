/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { CarouselNavImageButtonState, CarouselNavImageButtonSlots } from './CarouselNavImageButton.types';

/**
 * Render the final JSX of CarouselNavImageButton
 */
export const renderCarouselNavImageButton_unstable = (state: CarouselNavImageButtonState): JSXElement => {
  assertSlots<CarouselNavImageButtonSlots>(state);

  return (
    <state.root>
      <state.image />
    </state.root>
  );
};
