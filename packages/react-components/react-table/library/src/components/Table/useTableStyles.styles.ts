'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@iqvizyonui/react-theme';
import type { TableSlots, TableState } from './Table.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';

export const tableClassName = 'iui-Table';
export const tableClassNames: SlotClassNames<TableSlots> = {
  root: 'iui-Table',
};

const useTableLayoutStyles = makeStyles({
  root: {
    display: 'table',
    verticalAlign: 'middle',
    width: '100%',
    tableLayout: 'fixed',
  },
});

const useFlexLayoutStyles = makeStyles({
  root: {
    display: 'block',
  },
});

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    borderCollapse: 'collapse',
    backgroundColor: tokens.colorSubtleBackground,
  },
});

/**
 * Apply styling to the Table slots based on the state
 */
export const useTableStyles_unstable = (state: TableState): TableState => {
  const styles = useStyles();
  const layoutStyles = {
    table: useTableLayoutStyles(),
    flex: useFlexLayoutStyles(),
  };
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(
    tableClassName,
    styles.root,
    state.noNativeElements ? layoutStyles.flex.root : layoutStyles.table.root,
    state.root.className,
  );

  return state;
};
