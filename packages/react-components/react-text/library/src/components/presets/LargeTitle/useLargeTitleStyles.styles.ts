'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const largeTitleClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-LargeTitle',
};

/**
 * Styles for the root slot
 */
export const useLargeTitleStyles = makeStyles({
  root: typographyStyles.largeTitle,
});
