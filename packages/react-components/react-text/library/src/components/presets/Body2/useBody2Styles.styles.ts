'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const body2ClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-Body2',
};

/**
 * Styles for the root slot
 */
export const useBody2Styles = makeStyles({
  root: typographyStyles.body2,
});
