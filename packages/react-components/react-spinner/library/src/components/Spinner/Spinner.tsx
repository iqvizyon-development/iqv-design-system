'use client';

import * as React from 'react';
import { useSpinner_unstable } from './useSpinner';
import { renderSpinner_unstable } from './renderSpinner';
import { useSpinnerStyles_unstable } from './useSpinnerStyles.styles';
import type { SpinnerProps } from './Spinner.types';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';

/**
 * Converged Spinner component for the fluentui repo
 */
export const Spinner: ForwardRefComponent<SpinnerProps> = React.forwardRef((props, ref) => {
  const state = useSpinner_unstable(props, ref);

  useSpinnerStyles_unstable(state);

  useCustomStyleHook_unstable('useSpinnerStyles_unstable')(state);

  return renderSpinner_unstable(state);
});

Spinner.displayName = 'Spinner';
