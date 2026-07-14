/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { SpinButtonBaseState, SpinButtonSlots } from './SpinButton.types';

/**
 * Render the final JSX of SpinButton
 */
export const renderSpinButton_unstable = (state: SpinButtonBaseState): JSXElement => {
  assertSlots<SpinButtonSlots>(state);

  return (
    <state.root>
      <state.input />
      <state.incrementButton />
      <state.decrementButton />
    </state.root>
  );
};
