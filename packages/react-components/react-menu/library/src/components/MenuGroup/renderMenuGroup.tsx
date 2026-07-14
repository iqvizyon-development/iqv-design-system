/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuGroupContextValues, MenuGroupSlots, MenuGroupState } from './MenuGroup.types';
import { MenuGroupContextProvider } from '../../contexts/menuGroupContext';

/**
 * Redefine the render function to add slots. Reuse the menugroup structure but add
 * slots to children.
 */
export const renderMenuGroup_unstable = (state: MenuGroupState, contextValues: MenuGroupContextValues): JSXElement => {
  assertSlots<MenuGroupSlots>(state);

  return (
    <MenuGroupContextProvider value={contextValues.menuGroup}>
      <state.root />
    </MenuGroupContextProvider>
  );
};
