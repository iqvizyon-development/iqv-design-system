import type { JSXElement } from '@iqvizyonui/react-utilities';
import type { TagPickerGroupState } from './TagPickerGroup.types';
import { renderTagGroup_unstable, type TagGroupContextValues } from '@iqvizyonui/react-tags';

export function renderTagPickerGroup_unstable(
  state: TagPickerGroupState,
  contexts: TagGroupContextValues,
): JSXElement | null {
  if (!state.hasSelectedOptions) {
    return null;
  }

  return renderTagGroup_unstable(state, contexts);
}
