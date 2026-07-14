'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const subtitle2ClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-Subtitle2',
};

/**
 * Styles for the root slot
 */
export const useSubtitle2Styles = makeStyles({
  root: typographyStyles.subtitle2,
});
