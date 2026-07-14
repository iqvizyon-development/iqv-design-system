/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { RadioSlots, RadioBaseState } from './Radio.types';

/**
 * Render the final JSX of Radio
 */
export const renderRadio_unstable = (state: RadioBaseState): JSXElement => {
  assertSlots<RadioSlots>(state);

  return (
    <state.root>
      <state.input />
      <state.indicator />
      {state.label && <state.label />}
    </state.root>
  );
};
