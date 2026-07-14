'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import type { SparklineProps, SparklineStyles } from './Sparkline.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { tokens, typographyStyles } from '@iqvizyonui/react-theme';

/**
 * @internal
 */
export const sparklineClassNames: SlotClassNames<SparklineStyles> = {
  inlineBlock: 'iui-sprk__inlineBlock',
  valueText: 'iui-sprk__valueText',
};

/**
 * Base Styles
 */
const useStyles = makeStyles({
  inlineBlock: {
    display: 'inline',
  },
  valueText: {
    ...typographyStyles.caption1,
    fill: tokens.colorNeutralForeground1,
    forcedColorAdjust: 'auto',
  },
});

/**
 * Apply styling to the Carousel slots based on the state
 */
export const useSparklineStyles = (props: SparklineProps): SparklineStyles => {
  const baseStyles = useStyles();

  return {
    inlineBlock: mergeClasses(sparklineClassNames.inlineBlock, baseStyles.inlineBlock, props.styles?.inlineBlock),
    valueText: mergeClasses(sparklineClassNames.valueText, baseStyles.valueText, props.styles?.valueText),
  };
};
