/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuListContextValues, MenuListSlots, MenuListState } from './MenuList.types';
import { MenuListProvider } from '../../contexts/menuListContext';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuList_unstable = (state: MenuListState, contextValues: MenuListContextValues): JSXElement => {
  assertSlots<MenuListSlots>(state);

  return (
    <MenuListProvider value={contextValues.menuList}>
      <state.root />
    </MenuListProvider>
  );
};
