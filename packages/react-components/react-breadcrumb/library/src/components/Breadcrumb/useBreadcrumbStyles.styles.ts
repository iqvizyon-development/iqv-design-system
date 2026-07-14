'use client';

import { makeResetStyles, mergeClasses } from '@griffel/react';
import type { BreadcrumbSlots, BreadcrumbState } from './Breadcrumb.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';

export const breadcrumbClassNames: SlotClassNames<BreadcrumbSlots> = {
  root: 'iui-Breadcrumb',
  list: 'iui-Breadcrumb__list',
};

const useListClassName = makeResetStyles({
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  padding: 0,
});

/**
 * Apply styling to the Breadcrumb slots based on the state
 */
export const useBreadcrumbStyles_unstable = (state: BreadcrumbState): BreadcrumbState => {
  const listBaseClassName = useListClassName();
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(breadcrumbClassNames.root, state.root.className);
  if (state.list) {
    // eslint-disable-next-line react-hooks/immutability
    state.list.className = mergeClasses(listBaseClassName, breadcrumbClassNames.list, state.list.className);
  }
  return state;
};
