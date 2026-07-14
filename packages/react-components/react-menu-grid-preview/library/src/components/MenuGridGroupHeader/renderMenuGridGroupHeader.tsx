/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuGridGroupHeaderSlots, MenuGridGroupHeaderState } from './MenuGridGroupHeader.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuGridGroupHeader_unstable = (state: MenuGridGroupHeaderState): JSXElement => {
  assertSlots<MenuGridGroupHeaderSlots>(state);

  return <state.root />;
};
