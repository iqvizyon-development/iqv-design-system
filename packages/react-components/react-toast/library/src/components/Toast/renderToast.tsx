/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { BackgroundAppearanceProvider } from '@iqvizyonui/react-shared-contexts';
import type { ToastState, ToastSlots, ToastContextValues } from './Toast.types';

/**
 * Render the final JSX of Toast
 */
export const renderToast_unstable = (state: ToastState, contextValues: ToastContextValues): JSXElement => {
  assertSlots<ToastSlots>(state);

  return (
    <BackgroundAppearanceProvider value={contextValues.backgroundAppearance}>
      <state.root />
    </BackgroundAppearanceProvider>
  );
};
