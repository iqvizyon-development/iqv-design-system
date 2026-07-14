/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import type { DrawerHeaderNavigationSlots, DrawerHeaderNavigationState } from './DrawerHeaderNavigation.types';

/**
 * Render the final JSX of DrawerHeaderNavigation
 */
export const renderDrawerHeaderNavigation_unstable = (state: DrawerHeaderNavigationState): JSXElement => {
  assertSlots<DrawerHeaderNavigationSlots>(state);

  return <state.root />;
};
