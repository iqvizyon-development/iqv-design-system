/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuGridItemSlots, MenuGridItemState } from './MenuGridItem.types';

/**
 * Function that renders the final JSX of the component
 */
export const renderMenuGridItem_unstable = (state: MenuGridItemState): JSXElement => {
  assertSlots<MenuGridItemSlots>(state);

  return (
    <state.root>
      {state.icon && <state.icon />}
      {state.content && (
        <state.content>
          {state.content.children}
          {state.subText && <state.subText />}
        </state.content>
      )}
      {state.firstSubAction && <state.firstSubAction />}
      {state.secondSubAction && <state.secondSubAction />}
    </state.root>
  );
};
