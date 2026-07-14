/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { Portal } from '@iqvizyonui/react-portal';
import { ActiveDescendantContextProvider } from '@iqvizyonui/react-aria';

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { ComboboxContext } from '../../contexts/ComboboxContext';
import type { ComboboxContextValues, BaseComboboxState, ComboboxSlots } from './Combobox.types';
import { ListboxProvider } from '../../contexts/ListboxContext';

/**
 * Render the final JSX of Combobox
 */
export const renderCombobox_unstable = (state: BaseComboboxState, contextValues: ComboboxContextValues): JSXElement => {
  assertSlots<ComboboxSlots>(state);

  return (
    <state.root>
      <ActiveDescendantContextProvider value={contextValues.activeDescendant}>
        <ListboxProvider value={contextValues.listbox}>
          {/*eslint-disable-next-line @typescript-eslint/no-deprecated*/}
          <ComboboxContext.Provider value={contextValues.combobox}>
            <state.input />
            {state.clearIcon && <state.clearIcon />}
            {state.expandIcon && <state.expandIcon />}
            {state.listbox &&
              (state.inlinePopup ? (
                <state.listbox />
              ) : (
                <Portal mountNode={state.mountNode}>
                  <state.listbox />
                </Portal>
              ))}
            {/*eslint-disable-next-line @typescript-eslint/no-deprecated*/}
          </ComboboxContext.Provider>
        </ListboxProvider>
      </ActiveDescendantContextProvider>
    </state.root>
  );
};
