/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { AvatarGroupItemBaseState, AvatarGroupItemSlots } from './AvatarGroupItem.types';

/**
 * Render the final JSX of AvatarGroupItem
 */
export const renderAvatarGroupItem_unstable = (state: AvatarGroupItemBaseState): JSXElement => {
  assertSlots<AvatarGroupItemSlots>(state);

  return (
    <state.root>
      <state.avatar />
      {state.isOverflowItem && <state.overflowLabel />}
    </state.root>
  );
};
