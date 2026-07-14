import { createContext as reactCreateContext } from 'react';
import { createContext as createContextSelector } from '@iqvizyonui/react-context-selector';

export const nativeContext = reactCreateContext(undefined);
export const contextSelectorContext = createContextSelector(undefined);
