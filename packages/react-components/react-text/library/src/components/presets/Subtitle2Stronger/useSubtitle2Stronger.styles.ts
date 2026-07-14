'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const subtitle2StrongerClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-Subtitle2Stronger',
};

/**
 * Styles for the root slot
 */
export const useSubtitle2StrongerStyles = makeStyles({
  root: typographyStyles.subtitle2Stronger,
});
