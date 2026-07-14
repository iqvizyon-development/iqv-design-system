'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const caption1StrongerClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-Caption1Stronger',
};

/**
 * Styles for the root slot
 */
export const useCaption1StrongerStyles = makeStyles({
  root: typographyStyles.caption1Stronger,
});
