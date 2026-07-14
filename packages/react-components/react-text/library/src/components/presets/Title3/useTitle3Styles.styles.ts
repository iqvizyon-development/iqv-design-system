'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const title3ClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-Title3',
};

/**
 * Styles for the root slot
 */
export const useTitle3Styles = makeStyles({
  root: typographyStyles.title3,
});
