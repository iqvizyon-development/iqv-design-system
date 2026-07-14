/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TextareaBaseState, TextareaSlots } from './Textarea.types';

/**
 * Render the final JSX of Textarea
 */
export const renderTextarea_unstable = (state: TextareaBaseState): JSXElement => {
  assertSlots<TextareaSlots>(state);

  return (
    <state.root>
      <state.textarea />
    </state.root>
  );
};
