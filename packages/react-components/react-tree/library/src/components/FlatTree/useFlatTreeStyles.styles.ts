'use client';

import { makeResetStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { tokens } from '@iqvizyonui/react-theme';
import type { FlatTreeSlots, FlatTreeState } from './FlatTree.types';

export const flatTreeClassNames: SlotClassNames<Omit<FlatTreeSlots, 'collapseMotion'>> = {
  root: 'iui-FlatTree',
};

const useBaseStyles = makeResetStyles({
  display: 'flex',
  flexDirection: 'column',
  rowGap: tokens.spacingVerticalXXS,
});

export const useFlatTreeStyles_unstable = (state: FlatTreeState): FlatTreeState => {
  const baseStyles = useBaseStyles();
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(flatTreeClassNames.root, baseStyles, state.root.className);
  return state;
};
