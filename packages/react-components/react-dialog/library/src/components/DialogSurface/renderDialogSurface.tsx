/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { MotionRefForwarderReset } from '@iqvizyonui/react-motion';
import { Portal } from '@iqvizyonui/react-portal';
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import { DialogSurfaceProvider } from '../../contexts';
import type { DialogSurfaceState, DialogSurfaceSlots, DialogSurfaceContextValues } from './DialogSurface.types';

/**
 * Render the final JSX of DialogSurface
 */
export const renderDialogSurface_unstable = (
  state: DialogSurfaceState,
  contextValues: DialogSurfaceContextValues,
): JSXElement => {
  assertSlots<DialogSurfaceSlots>(state);

  return (
    <Portal mountNode={state.mountNode}>
      {state.backdrop &&
        // TODO: state.backdropMotion is non nullable, but assertSlots asserts it as nullable
        // FIXME: this should be resolved by properly splitting props and state slots declaration
        state.backdropMotion && (
          <state.backdropMotion>
            <state.backdrop />
          </state.backdropMotion>
        )}
      <MotionRefForwarderReset>
        <DialogSurfaceProvider value={contextValues.dialogSurface}>
          <state.root />
        </DialogSurfaceProvider>
      </MotionRefForwarderReset>
    </Portal>
  );
};
