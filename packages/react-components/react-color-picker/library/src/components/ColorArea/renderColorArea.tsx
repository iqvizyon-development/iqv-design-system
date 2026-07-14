/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { ColorAreaState, ColorAreaSlots } from './ColorArea.types';

/**
 * Render the final JSX of ColorArea
 */
export const renderColorArea_unstable = (state: ColorAreaState): JSXElement => {
  assertSlots<ColorAreaSlots>(state);

  return (
    <state.root>
      <state.thumb>
        <state.inputX />
        <state.inputY />
      </state.thumb>
    </state.root>
  );
};
