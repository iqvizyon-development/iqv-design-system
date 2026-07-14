/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import type { TeachingPopoverBodyState } from './TeachingPopoverBody.types';
import type { TeachingPopoverBodySlots } from './TeachingPopoverBody.types';
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

/**
 * Render the final JSX of TeachingPopoverBody
 */
export const renderTeachingPopoverBody_unstable = (state: TeachingPopoverBodyState): JSXElement => {
  assertSlots<TeachingPopoverBodySlots>(state);

  return (
    <state.root>
      {state.media && <state.media />}
      {state.root.children}
    </state.root>
  );
};
