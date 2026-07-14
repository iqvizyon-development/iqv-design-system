/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { OptionState, OptionSlots } from './Option.types';

/**
 * Render the final JSX of Option
 */
export const renderOption_unstable = (state: OptionState): JSXElement => {
  assertSlots<OptionSlots>(state);

  return (
    <state.root>
      {state.checkIcon && <state.checkIcon />}
      {state.root.children}
    </state.root>
  );
};
