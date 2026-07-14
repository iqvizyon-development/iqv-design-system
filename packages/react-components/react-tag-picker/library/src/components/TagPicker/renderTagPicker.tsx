import * as React from 'react';
import type { TagPickerState, TagPickerContextValues, TagPickerSlots } from './TagPicker.types';
import { ActiveDescendantContextProvider } from '@iqvizyonui/react-aria';
import { ListboxProvider } from '@iqvizyonui/react-combobox';
import { Portal } from '@iqvizyonui/react-portal';
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { TagPickerContextProvider } from '../../contexts/TagPickerContext';

/**
 * Render the final JSX of Picker
 */

export const renderTagPicker_unstable = (state: TagPickerState, contexts: TagPickerContextValues): JSXElement => {
  assertSlots<TagPickerSlots>(state);
  return (
    <TagPickerContextProvider value={contexts.picker}>
      <ActiveDescendantContextProvider value={contexts.activeDescendant}>
        <ListboxProvider value={contexts.listbox}>
          {state.trigger}
          {state.popover &&
            (state.inline ? state.popover : <Portal mountNode={state.mountNode}>{state.popover}</Portal>)}
        </ListboxProvider>
      </ActiveDescendantContextProvider>
    </TagPickerContextProvider>
  );
};
