/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { ActiveDescendantContextProvider } from '@iqvizyonui/react-aria';
import type { ListboxContextValues, ListboxState, ListboxSlots } from './Listbox.types';
import { ListboxContext } from '../../contexts/ListboxContext';

/**
 * Render the final JSX of Listbox
 */
export const renderListbox_unstable = (state: ListboxState, contextValues: ListboxContextValues): JSXElement => {
  assertSlots<ListboxSlots>(state);

  return (
    <ActiveDescendantContextProvider value={contextValues.activeDescendant}>
      <ListboxContext.Provider value={contextValues.listbox}>
        <state.root />
      </ListboxContext.Provider>
    </ActiveDescendantContextProvider>
  );
};
