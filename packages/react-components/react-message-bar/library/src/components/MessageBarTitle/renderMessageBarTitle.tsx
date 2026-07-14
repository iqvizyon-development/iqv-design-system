/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MessageBarTitleState, MessageBarTitleSlots } from './MessageBarTitle.types';

/**
 * Render the final JSX of MessageBarTitle
 */
export const renderMessageBarTitle_unstable = (state: MessageBarTitleState): JSXElement => {
  assertSlots<MessageBarTitleSlots>(state);

  return <state.root />;
};
