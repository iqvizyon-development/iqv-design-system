/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { NavSubItemGroupState, NavSubItemGroupSlots } from './NavSubItemGroup.types';

/**
 * Render the final JSX of NavSubItemGroup
 */
export const renderNavSubItemGroup_unstable = (state: NavSubItemGroupState): JSXElement => {
  assertSlots<NavSubItemGroupSlots>(state);

  return state.collapseMotion ? (
    <state.collapseMotion>
      <state.root />
    </state.collapseMotion>
  ) : (
    <state.root />
  );
};
