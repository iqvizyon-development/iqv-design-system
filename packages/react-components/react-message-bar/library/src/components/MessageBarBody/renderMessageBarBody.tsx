/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MessageBarBodyState, MessageBarBodySlots, MessageBarBodyContextValues } from './MessageBarBody.types';
import { LinkContextProvider } from '@iqvizyonui/react-link';

/**
 * Render the final JSX of MessageBarBody
 */
export const renderMessageBarBody_unstable = (
  state: MessageBarBodyState,
  contextValues: MessageBarBodyContextValues,
): JSXElement => {
  assertSlots<MessageBarBodySlots>(state);

  return (
    <LinkContextProvider value={contextValues.link}>
      <state.root />
    </LinkContextProvider>
  );
};
