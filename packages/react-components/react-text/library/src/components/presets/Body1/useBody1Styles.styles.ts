'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const body1ClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-Body1',
};

/**
 * Styles for the root slot
 */
export const useBody1Styles = makeStyles({
  root: typographyStyles.body1,
});
