/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { DialogBodyState, DialogBodySlots } from './DialogBody.types';

/**
 * Render the final JSX of DialogBody
 */
export const renderDialogBody_unstable = (state: DialogBodyState): JSXElement => {
  assertSlots<DialogBodySlots>(state);

  // TODO Add additional slots in the appropriate place
  return <state.root />;
};
