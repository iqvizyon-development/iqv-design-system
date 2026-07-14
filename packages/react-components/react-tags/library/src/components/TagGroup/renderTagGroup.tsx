/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TagGroupBaseState, TagGroupSlots, TagGroupContextValues } from './TagGroup.types';
import { TagGroupContextProvider } from '../../contexts/tagGroupContext';

/**
 * Render the final JSX of TagGroup
 */
export const renderTagGroup_unstable = (state: TagGroupBaseState, contextValue: TagGroupContextValues): JSXElement => {
  assertSlots<TagGroupSlots>(state);

  return (
    <TagGroupContextProvider value={contextValue.tagGroup}>
      <state.root />
    </TagGroupContextProvider>
  );
};
