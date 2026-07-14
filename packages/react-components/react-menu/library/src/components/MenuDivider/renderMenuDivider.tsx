/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuDividerSlots, MenuDividerState } from './MenuDivider.types';

/**
 * Redefine the render function to add slots. Reuse the menudivider structure but add
 * slots to children.
 */
export const renderMenuDivider_unstable = (state: MenuDividerState): JSXElement => {
  assertSlots<MenuDividerSlots>(state);

  return <state.root />;
};
