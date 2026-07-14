/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { DrawerFooterSlots, DrawerFooterState } from './DrawerFooter.types';

/**
 * Render the final JSX of DrawerFooter
 */
export const renderDrawerFooter_unstable = (state: DrawerFooterState): JSXElement => {
  assertSlots<DrawerFooterSlots>(state);

  return <state.root />;
};
