/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { NavProvider } from '../NavContext';
import type { NavState, NavSlots } from './Nav.types';
import type { NavContextValues } from '../NavContext.types';

export const renderNav_unstable = (state: NavState, contextValues: NavContextValues): JSXElement => {
  assertSlots<NavSlots>(state);

  return (
    <NavProvider value={contextValues.nav}>
      <state.root />
    </NavProvider>
  );
};
