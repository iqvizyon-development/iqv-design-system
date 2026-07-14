'use client';

import { mergeClasses } from '@griffel/react';
import type { DataGridHeaderSlots, DataGridHeaderState } from './DataGridHeader.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { useTableHeaderStyles_unstable } from '../TableHeader/useTableHeaderStyles.styles';

export const dataGridHeaderClassNames: SlotClassNames<DataGridHeaderSlots> = {
  root: 'iui-DataGridHeader',
};

/**
 * Apply styling to the DataGridHeader slots based on the state
 */
export const useDataGridHeaderStyles_unstable = (state: DataGridHeaderState): DataGridHeaderState => {
  useTableHeaderStyles_unstable(state);
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(dataGridHeaderClassNames.root, state.root.className);

  return state;
};
