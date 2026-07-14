/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type {
  TeachingPopoverCarouselState,
  TeachingPopoverCarouselSlots,
  TeachingPopoverCarouselContextValues,
} from './TeachingPopoverCarousel.types';
import { CarouselProvider } from './Carousel/CarouselContext';

/**
 * Render the final JSX of TeachingPopoverCarousel
 */
export const renderTeachingPopoverCarousel_unstable = (
  state: TeachingPopoverCarouselState,
  contextValues: TeachingPopoverCarouselContextValues,
): JSXElement => {
  assertSlots<TeachingPopoverCarouselSlots>(state);

  return (
    <CarouselProvider value={contextValues.carousel}>
      <state.root />
    </CarouselProvider>
  );
};
