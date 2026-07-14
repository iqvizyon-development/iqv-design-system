'use client';

import * as React from 'react';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import { useTagPickerOption_unstable } from './useTagPickerOption';
import { renderTagPickerOption_unstable } from './renderTagPickerOption';
import { useTagPickerOptionStyles_unstable } from './useTagPickerOptionStyles.styles';
import type { TagPickerOptionProps } from './TagPickerOption.types';
import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';

/**
 * TagPickerOption component -
 * A TagPickerOption is a composite component that allows users to select tags.
 */
export const TagPickerOption: ForwardRefComponent<TagPickerOptionProps> = React.forwardRef((props, ref) => {
  const state = useTagPickerOption_unstable(props, ref);

  useTagPickerOptionStyles_unstable(state);
  useCustomStyleHook_unstable('useTagPickerOptionStyles_unstable')(state);
  return renderTagPickerOption_unstable(state);
});

TagPickerOption.displayName = 'TagPickerOption';
