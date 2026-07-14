/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { CarouselSliderState, CarouselSliderSlots } from './CarouselSlider.types';
import type { CarouselSliderContextValues } from './CarouselSliderContext';
import { CarouselSliderContextProvider } from './CarouselSliderContext';

/**
 * Render the final JSX of CarouselSlider
 */
export const renderCarouselSlider_unstable = (
  state: CarouselSliderState,
  contextValues: CarouselSliderContextValues,
): JSXElement => {
  assertSlots<CarouselSliderSlots>(state);

  return (
    <CarouselSliderContextProvider value={contextValues.carouselSlider}>
      <state.root />
    </CarouselSliderContextProvider>
  );
};
