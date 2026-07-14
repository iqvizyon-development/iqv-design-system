/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { AppItemStaticState, AppItemStaticSlots } from './AppItemStatic.types';

/**
 * Render the final JSX of AppItemStatic
 */
export const renderAppItemStatic_unstable = (state: AppItemStaticState): JSXElement => {
  assertSlots<AppItemStaticSlots>(state);

  return (
    <state.root>
      {state.icon && <state.icon />}
      {state.root.children}
    </state.root>
  );
};
