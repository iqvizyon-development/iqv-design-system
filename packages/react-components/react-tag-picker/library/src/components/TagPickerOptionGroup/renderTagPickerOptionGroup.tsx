import type { TagPickerOptionGroupState } from './TagPickerOptionGroup.types';
import { renderOptionGroup_unstable } from '@iqvizyonui/react-combobox';
import type { JSXElement } from '@iqvizyonui/react-utilities';

/**
 * Render the final JSX of TagPickerOptionGroup
 */
export const renderTagPickerOptionGroup: (state: TagPickerOptionGroupState) => JSXElement = renderOptionGroup_unstable;
