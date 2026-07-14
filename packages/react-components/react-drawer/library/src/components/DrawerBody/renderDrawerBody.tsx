/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { DrawerBodySlots, DrawerBodyState } from './DrawerBody.types';

/**
 * Render the final JSX of DrawerBody
 */
export const renderDrawerBody_unstable = (state: DrawerBodyState): JSXElement => {
  assertSlots<DrawerBodySlots>(state);

  return <state.root />;
};
