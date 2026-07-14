/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { NavProvider } from '../NavContext';
import type { NavContextValues } from '../NavContext.types';
import type { NavDrawerSlots, NavDrawerState } from './NavDrawer.types';

export const renderNavDrawer_unstable = (state: NavDrawerState, contextValues: NavContextValues): JSXElement => {
  assertSlots<NavDrawerSlots>(state);

  return (
    <NavProvider value={contextValues.nav}>
      <state.root />
    </NavProvider>
  );
};
