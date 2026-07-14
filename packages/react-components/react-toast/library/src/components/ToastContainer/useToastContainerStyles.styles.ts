'use client';

import { makeResetStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@iqvizyonui/react-theme';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { createCustomFocusIndicatorStyle } from '@iqvizyonui/react-tabster';
import type { ToastContainerSlots, ToastContainerState } from './ToastContainer.types';

export const toastContainerClassNames: SlotClassNames<ToastContainerSlots> = {
  root: 'iui-ToastContainer',
  timer: 'iui-ToastContainer__timer',
};

const useRootBaseClassName = makeResetStyles({
  boxSizing: 'border-box',
  marginTop: '16px',
  pointerEvents: 'all',
  borderRadius: tokens.borderRadiusMedium,
  ...createCustomFocusIndicatorStyle({
    outline: `${tokens.strokeWidthThick} solid ${tokens.colorStrokeFocus2}`,
  }),
});

/**
 * Apply styling to the ToastContainer slots based on the state
 */
export const useToastContainerStyles_unstable = (state: ToastContainerState): ToastContainerState => {
  const rootBaseClassName = useRootBaseClassName();
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(toastContainerClassNames.root, rootBaseClassName, state.root.className);

  return state;
};
