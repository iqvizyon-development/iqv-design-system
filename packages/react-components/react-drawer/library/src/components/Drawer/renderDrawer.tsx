/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { DrawerContextValue } from '../../contexts/drawerContext';
import { DrawerProvider } from '../../contexts/drawerContext';

import type { DrawerState, DrawerSlots } from './Drawer.types';

/**
 * Render the final JSX of Drawer
 */
export const renderDrawer_unstable = (state: DrawerState, contextValue: DrawerContextValue): JSXElement => {
  assertSlots<DrawerSlots>(state);

  return (
    <DrawerProvider value={contextValue}>
      <state.root />
    </DrawerProvider>
  );
};
