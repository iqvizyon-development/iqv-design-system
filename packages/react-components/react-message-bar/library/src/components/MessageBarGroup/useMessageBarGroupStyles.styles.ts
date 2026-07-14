import { mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { MessageBarGroupSlots, MessageBarGroupState } from './MessageBarGroup.types';

export const messageBarGroupClassNames: SlotClassNames<MessageBarGroupSlots> = {
  root: 'iui-MessageBarGroup',
};

/**
 * Apply styling to the MessageBarGroup slots based on the state
 */
export const useMessageBarGroupStyles_unstable = (state: MessageBarGroupState): MessageBarGroupState => {
  state.root.className = mergeClasses(messageBarGroupClassNames.root, state.root.className);
  return state;
};
