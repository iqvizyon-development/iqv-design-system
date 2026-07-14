/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { LabelBaseState, LabelSlots } from './Label.types';

/**
 * Render the final JSX of Label
 */
export const renderLabel_unstable = (state: LabelBaseState): JSXElement => {
  assertSlots<LabelSlots>(state);

  return (
    <state.root>
      {state.root.children}
      {state.required && <state.required />}
    </state.root>
  );
};
