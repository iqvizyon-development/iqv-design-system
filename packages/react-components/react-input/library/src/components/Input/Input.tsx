'use client';

import * as React from 'react';
import { useInput_unstable } from './useInput';
import { renderInput_unstable } from './renderInput';
import { useInputStyles_unstable } from './useInputStyles.styles';
import type { InputProps } from './Input.types';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';

/**
 * The Input component allows people to enter and edit text.
 */
export const Input: ForwardRefComponent<InputProps> = React.forwardRef((props, ref) => {
  const state = useInput_unstable(props, ref);

  useInputStyles_unstable(state);

  useCustomStyleHook_unstable('useInputStyles_unstable')(state);

  return renderInput_unstable(state);
});

Input.displayName = 'Input';
