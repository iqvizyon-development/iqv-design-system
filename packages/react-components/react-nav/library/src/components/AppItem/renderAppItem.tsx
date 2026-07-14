/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { AppItemState, AppItemSlots } from './AppItem.types';

/**
 * Render the final JSX of AppItem
 */
export const renderAppItem_unstable = (state: AppItemState): JSXElement => {
  assertSlots<AppItemSlots>(state);

  return (
    <state.root>
      {state.icon && <state.icon />}
      {state.root.children}
    </state.root>
  );
};
