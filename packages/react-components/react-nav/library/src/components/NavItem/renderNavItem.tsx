/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { NavItemState, NavItemSlots } from './NavItem.types';

/**
 * Render the final JSX of NavItem
 */
export const renderNavItem_unstable = (state: NavItemState): JSXElement => {
  assertSlots<NavItemSlots>(state);

  return (
    <state.root>
      {state.icon && <state.icon />}
      {state.root.children}
    </state.root>
  );
};
