/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { DrawerContextValue } from '../../contexts/drawerContext';
import { DrawerProvider } from '../../contexts/drawerContext';

import type { InlineDrawerState, InlineDrawerSlots } from './InlineDrawer.types';

/**
 * Render the final JSX of InlineDrawer
 */
export const renderInlineDrawer_unstable = (state: InlineDrawerState, contextValue: DrawerContextValue): JSXElement => {
  assertSlots<InlineDrawerSlots>(state);

  return (
    <DrawerProvider value={contextValue}>
      {state.surfaceMotion ? (
        <state.surfaceMotion>
          <state.root />
        </state.surfaceMotion>
      ) : (
        <state.root />
      )}
    </DrawerProvider>
  );
};
