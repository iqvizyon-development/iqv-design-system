/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { ToastTitleState, ToastTitleSlots } from './ToastTitle.types';

/**
 * Render the final JSX of ToastTitle
 */
export const renderToastTitle_unstable = (state: ToastTitleState): JSXElement => {
  assertSlots<ToastTitleSlots>(state);

  return (
    <>
      {state.media ? <state.media /> : null}
      <state.root />
      {state.action ? <state.action /> : null}
    </>
  );
};
