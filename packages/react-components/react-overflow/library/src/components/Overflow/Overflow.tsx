'use client';

import * as React from 'react';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import type { OverflowProps } from './Overflow.types';
import { useOverflow_unstable } from './useOverflow';
import { useOverflowContextValues_unstable } from '../../useOverflowContextValues';
import { useOverflowStyles_unstable } from './useOverflowStyles.styles';
import { renderOverflow_unstable } from './renderOverflow';

/**
 * Provides an OverflowContext for OverflowItem descendants.
 */
export const Overflow: ForwardRefComponent<OverflowProps> = React.forwardRef((props, ref) => {
  const state = useOverflow_unstable(props, ref as React.Ref<HTMLElement>);
  const contextValues = useOverflowContextValues_unstable(state);

  useOverflowStyles_unstable(state);

  return renderOverflow_unstable(state, contextValues);
});
