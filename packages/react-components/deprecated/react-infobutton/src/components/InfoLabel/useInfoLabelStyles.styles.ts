/* eslint-disable @typescript-eslint/no-deprecated */

'use client';

import { tokens } from '@iqvizyonui/react-theme';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { InfoLabelSlots, InfoLabelState } from './InfoLabel.types';

/**
 * @deprecated use {@link @iqvizyonui/react-components#InfoLabel} from `\@iqvizyonui/react-components` or `\@iqvizyonui/react-infolabel` instead
 */
export const infoLabelClassNames: SlotClassNames<InfoLabelSlots> = {
  root: 'iui-InfoLabel',
  label: 'iui-InfoLabel__label',
  infoButton: 'iui-InfoLabel__infoButton',
};

const useLabelStyles = makeStyles({
  base: {
    verticalAlign: 'top',
    cursor: 'inherit',
    color: 'inherit',
  },
});

const useInfoButtonStyles = makeStyles({
  base: {
    verticalAlign: 'top',

    // Negative margin to align with the text
    marginTop: `calc(0px - ${tokens.spacingVerticalXXS})`,
    marginBottom: `calc(0px - ${tokens.spacingVerticalXXS})`,
  },

  large: {
    // Negative margin to align with the text
    marginTop: '-1px',
    marginBottom: '-1px',
  },
});

/**
 * Apply styling to the InfoLabel slots based on the state
 *
 * @deprecated use {@link @iqvizyonui/react-components#InfoLabel} from `\@iqvizyonui/react-components` or `\@iqvizyonui/react-infolabel` instead
 */
export const useInfoLabelStyles_unstable = (state: InfoLabelState): InfoLabelState => {
  // eslint-disable-next-line react-hooks/immutability -- deprecated component, not worth refactoring
  state.root.className = mergeClasses(infoLabelClassNames.root, state.root.className);

  const labelStyles = useLabelStyles();
  // eslint-disable-next-line react-hooks/immutability -- deprecated component, not worth refactoring
  state.label.className = mergeClasses(infoLabelClassNames.label, labelStyles.base, state.label.className);

  const infoButtonStyles = useInfoButtonStyles();
  if (state.infoButton) {
    // eslint-disable-next-line react-hooks/immutability -- deprecated component, not worth refactoring
    state.infoButton.className = mergeClasses(
      infoLabelClassNames.infoButton,
      infoButtonStyles.base,
      state.size === 'large' && infoButtonStyles.large,
      state.infoButton.className,
    );
  }

  return state;
};
