'use client';

import { mergeClasses, makeStyles } from '@griffel/react';
import type { TableBodySlots, TableBodyState } from './TableBody.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';

const useTableLayoutStyles = makeStyles({
  root: {
    display: 'table-row-group',
  },
});

const useFlexLayoutStyles = makeStyles({
  root: {
    display: 'block',
  },
});

export const tableBodyClassName = 'iui-TableBody';
export const tableBodyClassNames: SlotClassNames<TableBodySlots> = {
  root: 'iui-TableBody',
};

/**
 * Apply styling to the TableBody slots based on the state
 */
export const useTableBodyStyles_unstable = (state: TableBodyState): TableBodyState => {
  const layoutStyles = {
    table: useTableLayoutStyles(),
    flex: useFlexLayoutStyles(),
  };
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(
    tableBodyClassName,
    state.noNativeElements ? layoutStyles.flex.root : layoutStyles.table.root,
    state.root.className,
  );

  return state;
};
