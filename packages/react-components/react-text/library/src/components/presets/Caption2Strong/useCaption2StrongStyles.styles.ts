'use client';

import { makeStyles } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { TextSlots } from '../../Text/Text.types';
import { typographyStyles } from '@iqvizyonui/react-theme';

export const caption2StrongClassNames: SlotClassNames<TextSlots> = {
  root: 'iui-Caption2Strong',
};

/**
 * Styles for the root slot
 */
export const useCaption2StrongStyles = makeStyles({
  root: typographyStyles.caption2Strong,
});
