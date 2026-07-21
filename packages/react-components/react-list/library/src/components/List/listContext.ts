'use client';

import { createContext, useContextSelector } from '@iqvizyonui/react-context-selector';
import type { ContextSelector } from '@iqvizyonui/react-context-selector';
import type { ListSynchronousContextValue, ListContextValue } from './List.types';
import * as React from 'react';

export const listContextDefaultValue: ListContextValue = {
  selection: undefined,
  validateListItem: () => {
    /* noop */
  },
};

const listContext = createContext<ListContextValue | undefined>(undefined);

export const ListContextProvider = listContext.Provider;

export const useListContext_unstable = <T>(selector: ContextSelector<ListContextValue, T>): T =>
  useContextSelector(listContext, (ctx = listContextDefaultValue) => selector(ctx));

// This is a context that uses the standard, React Context API.
// The reason why this exists is that the Iqvizyon UI Context Provider replaces the
// React Context Provider with a custom one that needs a layout effect to update the context value.
// This results in issues with element/role validation, as the ListItem component has not been updated yet
// when the validation happens.
// https://github.com/iqvizyon-development/iqv-design-system/issues/34467
const ListSynchronousContext = React.createContext<ListSynchronousContextValue | undefined>(undefined);

export const ListSynchronousContextProvider = ListSynchronousContext.Provider;
export const useListSynchronousContext = (): ListSynchronousContextValue =>
  React.useContext(ListSynchronousContext) || {
    navigationMode: undefined,
    listItemRole: 'listitem',
  };
