'use client';

import type * as React from 'react';
import { useIqvizyon_unstable as useIqvizyon } from '@iqvizyonui/react-shared-contexts';
import { ArrowLeft, ArrowRight } from '@iqvizyonui/keyboard-keys';
import {
  useMergedRefs,
  useEventCallback,
  mergeCallbacks,
  getIntrinsicElementProps,
  slot,
} from '@iqvizyonui/react-utilities';
import type { MenuGridCellProps, MenuGridCellState } from './MenuGridCell.types';
import { useValidateNesting } from '../../utils/useValidateNesting';

/**
 * Given user props, returns state and render function for a MenuGridCell.
 */
export function useMenuGridCell_unstable(props: MenuGridCellProps, ref: React.Ref<HTMLDivElement>): MenuGridCellState {
  const { visuallyHidden } = props;

  const { dir } = useIqvizyon();
  const validateNestingRef = useValidateNesting('MenuGridCell');

  const onKeyDownWithPrevent = useEventCallback((event: React.KeyboardEvent<HTMLElement>) => {
    const CloseArrowKey = dir === 'ltr' ? ArrowLeft : ArrowRight;

    if (event.key === CloseArrowKey) {
      event.preventDefault();
    }
  });
  const onKeyDown = useEventCallback(mergeCallbacks(props.onKeyDown, onKeyDownWithPrevent));

  return {
    visuallyHidden,
    components: {
      root: 'div',
    },
    root: slot.always(
      getIntrinsicElementProps('div', {
        ref: useMergedRefs(ref, validateNestingRef),
        role: 'gridcell',
        ...props,
        onKeyDown,
      }),
      { elementType: 'div' },
    ),
  };
}
