/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TagBaseState, TagSlots, TagContextValues } from './Tag.types';
import { AvatarContextProvider } from '@iqvizyonui/react-avatar';

/**
 * Render the final JSX of Tag
 */
export const renderTag_unstable = (state: TagBaseState, contextValues: TagContextValues): JSXElement => {
  assertSlots<TagSlots>(state);

  return (
    <state.root>
      {state.media && (
        <AvatarContextProvider value={contextValues.avatar}>
          <state.media />
        </AvatarContextProvider>
      )}

      {state.icon && <state.icon />}
      {state.primaryText && <state.primaryText />}
      {state.secondaryText && <state.secondaryText />}
      {state.dismissIcon && state.dismissible && <state.dismissIcon />}
    </state.root>
  );
};
