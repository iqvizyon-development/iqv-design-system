/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { ListItemState, ListItemSlots } from './ListItem.types';

/**
 * Render the final JSX of ListItem
 */
export const renderListItem_unstable = (state: ListItemState): JSXElement => {
  assertSlots<ListItemSlots>(state);

  return (
    <state.root>
      {state.checkmark && <state.checkmark />}
      {state.root.children}
    </state.root>
  );
};
