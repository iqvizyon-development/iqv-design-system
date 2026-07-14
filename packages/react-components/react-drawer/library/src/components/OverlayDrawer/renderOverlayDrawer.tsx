/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { DrawerContextValue } from '../../contexts/drawerContext';
import { DrawerProvider } from '../../contexts/drawerContext';
import { DialogBackdropProvider } from '@iqvizyonui/react-dialog';

import type { OverlayDrawerState, OverlayDrawerInternalSlots } from './OverlayDrawer.types';

/**
 * Render the final JSX of OverlayDrawer
 */
export const renderOverlayDrawer_unstable = (
  state: OverlayDrawerState,
  contextValue: DrawerContextValue,
): JSXElement => {
  assertSlots<OverlayDrawerInternalSlots>(state);

  return (
    <DrawerProvider value={contextValue}>
      <DialogBackdropProvider value={false}>
        <state.dialog>
          <state.root />
        </state.dialog>
      </DialogBackdropProvider>
    </DrawerProvider>
  );
};
