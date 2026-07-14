/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { MenuSplitGroupState, MenuSplitGroupSlots, MenuSplitGroupContextValues } from './MenuSplitGroup.types';
import { menuSplitGroupContextDefaultValue, MenuSplitGroupContextProvider } from '../../contexts/menuSplitGroupContext';

/**
 * Render the final JSX of MenuSplitGroup
 */
export const renderMenuSplitGroup_unstable = (
  state: MenuSplitGroupState,
  contexts?: MenuSplitGroupContextValues,
): JSXElement => {
  assertSlots<MenuSplitGroupSlots>(state);

  return (
    <MenuSplitGroupContextProvider value={contexts?.menuSplitGroup ?? menuSplitGroupContextDefaultValue}>
      <state.root />
    </MenuSplitGroupContextProvider>
  );
};
