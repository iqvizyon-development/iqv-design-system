/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { SwatchPickerRowState, SwatchPickerRowSlots } from './SwatchPickerRow.types';

/**
 * Render the final JSX of SwatchPickerRow
 */
export const renderSwatchPickerRow_unstable = (state: SwatchPickerRowState): JSXElement => {
  assertSlots<SwatchPickerRowSlots>(state);
  return <state.root />;
};
