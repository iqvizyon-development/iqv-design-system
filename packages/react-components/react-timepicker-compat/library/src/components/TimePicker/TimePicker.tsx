'use client';

import * as React from 'react';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import { useTimePicker_unstable } from './useTimePicker';
import { useTimePickerStyles_unstable } from './useTimePickerStyles.styles';
import type { TimePickerProps } from './TimePicker.types';
import { renderCombobox_unstable, useComboboxContextValues } from '@iqvizyonui/react-combobox';
import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';

/**
 * TimePicker Compat component
 */
export const TimePicker: ForwardRefComponent<TimePickerProps> = React.forwardRef((props, ref) => {
  const state = useTimePicker_unstable(props, ref);

  const contextValues = useComboboxContextValues(state);

  useTimePickerStyles_unstable(state);
  useCustomStyleHook_unstable('useTimePickerCompatStyles_unstable')(state);

  return renderCombobox_unstable(state, contextValues);
});

TimePicker.displayName = 'TimePicker';
