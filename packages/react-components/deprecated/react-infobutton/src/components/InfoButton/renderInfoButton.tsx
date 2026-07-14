/* eslint-disable @typescript-eslint/no-deprecated */
/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import type * as React from 'react';
import { assertSlots } from '@iqvizyonui/react-utilities';
import { PopoverTrigger } from '@iqvizyonui/react-popover';
import type { InfoButtonState, InfoButtonSlots } from './InfoButton.types';

/**
 * Render the final JSX of InfoButton
 *
 * @deprecated use {@link @iqvizyonui/react-components#InfoLabel} from `\@iqvizyonui/react-components` or `\@iqvizyonui/react-infolabel` instead
 */
export const renderInfoButton_unstable = (state: InfoButtonState): React.ReactElement => {
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
