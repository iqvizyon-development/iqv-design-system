/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TableState, TableSlots, TableContextValues } from './Table.types';
import { TableContextProvider } from '../../contexts/tableContext';

/**
 * Render the final JSX of Table
 */
export const renderTable_unstable = (state: TableState, contextValues: TableContextValues): JSXElement => {
  assertSlots<TableSlots>(state);

  return (
    <TableContextProvider value={contextValues.table}>
      <state.root />
    </TableContextProvider>
  );
};
