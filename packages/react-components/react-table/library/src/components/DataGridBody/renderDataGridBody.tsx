/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { DataGridBodyState, DataGridBodySlots } from './DataGridBody.types';
import { TableRowIdContextProvider } from '../../contexts/rowIdContext';

/**
 * Render the final JSX of DataGridBody
 */
export const renderDataGridBody_unstable = (state: DataGridBodyState): JSXElement => {
  assertSlots<DataGridBodySlots>(state);

  return (
    <state.root>
      {state.rows.map(row => (
        <TableRowIdContextProvider key={row.rowId} value={row.rowId}>
          {state.renderRow(row)}
        </TableRowIdContextProvider>
      ))}
    </state.root>
  );
};
