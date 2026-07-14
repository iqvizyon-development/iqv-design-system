/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { MenuListProvider } from '@iqvizyonui/react-menu';
import type { MenuGridContextValues, MenuGridSlots, MenuGridState } from './MenuGrid.types';
import { MenuGridContextProvider } from '../../contexts/menuGridContext';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuGrid_unstable = (state: MenuGridState, contextValues: MenuGridContextValues): JSXElement => {
  assertSlots<MenuGridSlots>(state);

  return (
    <MenuListProvider value={contextValues.menuList}>
      <MenuGridContextProvider value={contextValues.menuGrid}>
        <state.root />
      </MenuGridContextProvider>
    </MenuListProvider>
  );
};
