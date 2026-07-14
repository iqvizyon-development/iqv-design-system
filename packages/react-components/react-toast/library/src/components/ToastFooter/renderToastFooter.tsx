/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { ToastFooterState, ToastFooterSlots } from './ToastFooter.types';

/**
 * Render the final JSX of ToastFooter
 */
export const renderToastFooter_unstable = (state: ToastFooterState): JSXElement => {
  assertSlots<ToastFooterSlots>(state);

  return <state.root />;
};
