/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { CarouselCardState, CarouselCardSlots } from './CarouselCard.types';

/**
 * Render the final JSX of CarouselCard
 */
export const renderCarouselCard_unstable = (state: CarouselCardState): JSXElement => {
  assertSlots<CarouselCardSlots>(state);

  return <state.root />;
};
