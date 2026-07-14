/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { SliderBaseState, SliderSlots } from './Slider.types';

/**
 * Render the final JSX of Slider
 */
export const renderSlider_unstable = (state: SliderBaseState): JSXElement => {
  assertSlots<SliderSlots>(state);

  return (
    <state.root>
      <state.input />
      <state.rail />
      <state.thumb />
    </state.root>
  );
};
