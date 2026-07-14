/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import type { TeachingPopoverFooterState } from './TeachingPopoverFooter.types';
import type { TeachingPopoverFooterSlots } from './TeachingPopoverFooter.types';
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

/**
 * Render the final JSX of TeachingPopoverFooter
 */
export const renderTeachingPopoverFooter_unstable = (state: TeachingPopoverFooterState): JSXElement => {
  assertSlots<TeachingPopoverFooterSlots>(state);

  return (
    <state.root>
      <state.primary />
      {state.secondary && <state.secondary />}
    </state.root>
  );
};
