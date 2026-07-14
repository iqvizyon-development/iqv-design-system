/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { PopoverTrigger } from '@iqvizyonui/react-popover';
import type { InfoButtonState, InfoButtonSlots } from './InfoButton.types';

/**
 * Render the final JSX of InfoButton
 */
export const renderInfoButton_unstable = (state: InfoButtonState): JSXElement => {
  assertSlots<InfoButtonSlots>(state);

  return (
    <state.popover>
      <PopoverTrigger>
        <state.root />
      </PopoverTrigger>
      <state.info />
    </state.popover>
  );
};
