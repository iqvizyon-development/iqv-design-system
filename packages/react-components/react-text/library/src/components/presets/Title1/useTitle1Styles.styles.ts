'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const title1ClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-Title1',
};

/**
 * Styles for the root slot
 */
export const useTitle1Styles = makeStyles({
  root: typographyStyles.title1,
});
