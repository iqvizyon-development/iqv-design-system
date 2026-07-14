/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import type { TeachingPopoverCarouselCardState } from './TeachingPopoverCarouselCard.types';
import type { TeachingPopoverCarouselCardSlots } from './TeachingPopoverCarouselCard.types';
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

/**
 * Render the final JSX of TeachingPopoverCarouselCard
 */
export const renderTeachingPopoverCarouselCard_unstable = (state: TeachingPopoverCarouselCardState): JSXElement => {
  assertSlots<TeachingPopoverCarouselCardSlots>(state);

  return <state.root />;
};
