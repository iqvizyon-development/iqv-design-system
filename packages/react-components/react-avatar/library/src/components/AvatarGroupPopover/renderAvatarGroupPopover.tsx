/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { AvatarGroupProvider } from '../../contexts/AvatarGroupContext';
import type { AvatarGroupContextValues } from '../AvatarGroup/AvatarGroup.types';

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { PopoverTrigger } from '@iqvizyonui/react-popover';
import type { AvatarGroupPopoverBaseState, AvatarGroupPopoverSlots } from './AvatarGroupPopover.types';

/**
 * Render the final JSX of AvatarGroupPopover
 */
export const renderAvatarGroupPopover_unstable = (
  state: AvatarGroupPopoverBaseState,
  contextValues: AvatarGroupContextValues,
): JSXElement => {
  assertSlots<AvatarGroupPopoverSlots>(state);

  return (
    <state.root>
      <PopoverTrigger disableButtonEnhancement>
        <state.tooltip>
          <state.triggerButton />
        </state.tooltip>
      </PopoverTrigger>
      <state.popoverSurface>
        <AvatarGroupProvider value={contextValues.avatarGroup}>
          <state.content />
        </AvatarGroupProvider>
      </state.popoverSurface>
    </state.root>
  );
};
