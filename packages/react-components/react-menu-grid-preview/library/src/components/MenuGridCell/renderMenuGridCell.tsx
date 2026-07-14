/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuGridCellSlots, MenuGridCellState } from './MenuGridCell.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuGridCell_unstable = (state: MenuGridCellState): JSXElement => {
  assertSlots<MenuGridCellSlots>(state);

  return <state.root />;
};
