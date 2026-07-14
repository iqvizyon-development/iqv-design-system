/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { SelectBaseState, SelectSlots } from './Select.types';

/**
 * Render the final JSX of Select
 */
export const renderSelect_unstable = (state: SelectBaseState): JSXElement => {
  assertSlots<SelectSlots>(state);
  return (
    <state.root>
      <state.select>{state.select.children}</state.select>
      {state.icon && <state.icon />}
    </state.root>
  );
};
