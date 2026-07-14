/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import type { TeachingPopoverHeaderState } from './TeachingPopoverHeader.types';
import type { TeachingPopoverHeaderSlots } from './TeachingPopoverHeader.types';
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

/**
 * Render the final JSX of TeachingPopoverHeader
 */
export const renderTeachingPopoverHeader_unstable = (state: TeachingPopoverHeaderState): JSXElement => {
  assertSlots<TeachingPopoverHeaderSlots>(state);

  return (
    <state.root>
      {state.icon && <state.icon />}
      {state.root.children}
      {state.dismissButton && <state.dismissButton />}
    </state.root>
  );
};
