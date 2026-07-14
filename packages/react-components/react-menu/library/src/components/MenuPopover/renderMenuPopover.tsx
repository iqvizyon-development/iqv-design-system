/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuPopoverSlots, MenuPopoverState } from './MenuPopover.types';
import { Portal } from '@iqvizyonui/react-portal';

/**
 * Render the final JSX of MenuPopover
 */
export const renderMenuPopover_unstable = (state: MenuPopoverState): JSXElement => {
  assertSlots<MenuPopoverSlots>(state);

  if (state.inline) {
    return (
      <>
        <state.root />
        {state.safeZone}
      </>
    );
  }

  return (
    <Portal mountNode={state.mountNode}>
      <state.root />
      {state.safeZone}
    </Portal>
  );
};
