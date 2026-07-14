/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TableRowState, TableRowSlots } from './TableRow.types';

/**
 * Render the final JSX of TableRow
 */
export const renderTableRow_unstable = (state: TableRowState): JSXElement => {
  assertSlots<TableRowSlots>(state);

  return <state.root />;
};
