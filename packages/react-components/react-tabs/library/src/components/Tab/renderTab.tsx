/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TabBaseState, TabInternalSlots } from './Tab.types';

/**
 * Render the final JSX of Tab
 */
export const renderTab_unstable = (state: TabBaseState): JSXElement => {
  assertSlots<TabInternalSlots>(state);

  return (
    <state.root>
      {state.icon && <state.icon />}
      {!state.iconOnly && <state.content />}
      {state.contentReservedSpace && <state.contentReservedSpace />}
    </state.root>
  );
};
