/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TableCellActionsState, TableCellActionsSlots } from './TableCellActions.types';

/**
 * Render the final JSX of TableCellActions
 */
export const renderTableCellActions_unstable = (state: TableCellActionsState): JSXElement => {
  assertSlots<TableCellActionsSlots>(state);

  return <state.root />;
};
