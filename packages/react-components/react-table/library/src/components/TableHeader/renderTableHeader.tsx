/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { TableHeaderContextProvider } from '../../contexts/tableHeaderContext';
import type { TableHeaderState, TableHeaderSlots } from './TableHeader.types';

/**
 * Render the final JSX of TableHeader
 */
export const renderTableHeader_unstable = (state: TableHeaderState): JSXElement => {
  assertSlots<TableHeaderSlots>(state);

  return (
    <TableHeaderContextProvider value="">
      <state.root />
    </TableHeaderContextProvider>
  );
};
