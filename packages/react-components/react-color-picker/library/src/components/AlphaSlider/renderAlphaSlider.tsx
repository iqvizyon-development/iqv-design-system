/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { AlphaSliderState, AlphaSliderSlots } from './AlphaSlider.types';

/**
 * Render the final JSX of AlphaSlider
 */
export const renderAlphaSlider_unstable = (state: AlphaSliderState): JSXElement => {
  assertSlots<AlphaSliderSlots>(state);

  return (
    <state.root>
      <state.input />
      <state.rail />
      <state.thumb />
    </state.root>
  );
};
