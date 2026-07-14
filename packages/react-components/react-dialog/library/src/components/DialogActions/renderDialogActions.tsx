/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { DialogActionsState, DialogActionsSlots } from './DialogActions.types';

/**
 * Render the final JSX of DialogActions
 */
export const renderDialogActions_unstable = (state: DialogActionsState): JSXElement => {
  assertSlots<DialogActionsSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <state.root />;
};
