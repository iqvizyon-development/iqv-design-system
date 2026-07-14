/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TagPickerInputState, TagPickerInputSlots } from './TagPickerInput.types';

/**
 * Render the final JSX of TagPickerInput
 */
export const renderTagPickerInput_unstable = (state: TagPickerInputState): JSXElement => {
  assertSlots<TagPickerInputSlots>(state);

  return <state.root />;
};
