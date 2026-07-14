/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuGridRowSlots, MenuGridRowState } from './MenuGridRow.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuGridRow_unstable = (state: MenuGridRowState): JSXElement => {
  assertSlots<MenuGridRowSlots>(state);

  return <state.root />;
};
