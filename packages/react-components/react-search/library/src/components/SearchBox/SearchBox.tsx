'use client';

import * as React from 'react';
import { useSearchBox_unstable } from './useSearchBox';
import { renderSearchBox_unstable } from './renderSearchBox';
import { useSearchBoxStyles_unstable } from './useSearchBoxStyles.styles';
import type { SearchBoxProps } from './SearchBox.types';
import type { ForwardRefComponent } from '@iqvizyonui/react-utilities';
import { useCustomStyleHook_unstable } from '@iqvizyonui/react-shared-contexts';

/**
 * SearchBox component - TODO: add more docs
 */
export const SearchBox: ForwardRefComponent<SearchBoxProps> = React.forwardRef((props, ref) => {
  const state = useSearchBox_unstable(props, ref);

  useSearchBoxStyles_unstable(state);

  useCustomStyleHook_unstable('useSearchBoxStyles_unstable')(state);

  return renderSearchBox_unstable(state);
});

SearchBox.displayName = 'SearchBox';
