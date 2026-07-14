/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuGroupHeaderSlots, MenuGroupHeaderState } from './MenuGroupHeader.types';

/**
 * Redefine the render function to add slots. Reuse the menugroupheader structure but add
 * slots to children.
 */
export const renderMenuGroupHeader_unstable = (state: MenuGroupHeaderState): JSXElement => {
  assertSlots<MenuGroupHeaderSlots>(state);

  return <state.root />;
};
