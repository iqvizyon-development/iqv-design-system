'use client';

import { makeResetStyles, mergeClasses } from '@griffel/react';
import { typographyStyles } from '@iqvizyonui/react-theme';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { MessageBarTitleSlots, MessageBarTitleState } from './MessageBarTitle.types';

export const messageBarTitleClassNames: SlotClassNames<MessageBarTitleSlots> = {
  root: 'iui-MessageBarTitle',
};

/**
 * Styles for the root slot
 */
const useRootBaseStyles = makeResetStyles({
  ...typographyStyles.body1Strong,
  '::after': {
    content: '" "',
  },
});

/**
 * Apply styling to the MessageBarTitle slots based on the state
 */
export const useMessageBarTitleStyles_unstable = (state: MessageBarTitleState): MessageBarTitleState => {
  const rootBaseStyles = useRootBaseStyles();
  // eslint-disable-next-line react-hooks/immutability
  state.root.className = mergeClasses(messageBarTitleClassNames.root, rootBaseStyles, state.root.className);

  return state;
};
