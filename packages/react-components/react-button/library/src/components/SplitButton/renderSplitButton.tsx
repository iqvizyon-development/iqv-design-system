/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { SplitButtonSlots, SplitButtonState } from './SplitButton.types';

/**
 * Renders a SplitButton component by passing the state defined props to the appropriate slots.
 */
export const renderSplitButton_unstable = (state: SplitButtonState): JSXElement => {
  assertSlots<SplitButtonSlots>(state);

  return (
    <state.root>
      {state.primaryActionButton && <state.primaryActionButton />}
      {state.menuButton && <state.menuButton />}
    </state.root>
  );
};
