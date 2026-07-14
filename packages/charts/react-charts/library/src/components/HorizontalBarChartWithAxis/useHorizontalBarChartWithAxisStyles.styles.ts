'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import type { HorizontalBarChartWithAxisProps, HorizontalBarChartWithAxisStyles } from './index';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { tokens, typographyStyles } from '@iqvizyonui/react-theme';
import { HighContrastSelector } from '../../utilities/index';

export const hbcWithAxisClassNames: SlotClassNames<HorizontalBarChartWithAxisStyles> = {
  opacityChangeOnHover: 'iui-hbcwa__opacityChangeOnHover',
  xAxisTicks: 'iui-hbcwa__xAxisTicks',
  tooltip: 'iui-hbcwa__tooltip',
  barLabel: 'iui-hbcwa__barLabel',
  chartLabel: '',
  xAxisDomain: '',
  xAxisText: '',
  yAxisDomain: '',
  yAxisTicks: '',
  yAxisText: '',
  root: '',
  xAxis: '',
  yAxis: '',
  legendContainer: '',
  hover: '',
  descriptionMessage: '',
  axisTitle: '',
  chartTitle: '',
  shapeStyles: '',
  chartWrapper: '',
  svgTooltip: '',
  chart: '',
  axisAnnotation: '',
  plotContainer: '',
  annotationLayer: '',
};

const useStyles = makeStyles({
  opacityChangeOnHover: {
    opacity: 0.1, // supports custom opacity
  },

  xAxisTicks: {},

  barLabel: {
    ...typographyStyles.caption1Strong,
    fill: tokens.colorNeutralForeground1,
    [HighContrastSelector]: {
      stroke: 'CanvasText',
    },
  },
});

/**
 * Apply styling to the HorizontalBarChartWithAxis slots based on the state
 */
export const useHorizontalBarChartWithAxisStyles = (
  props: HorizontalBarChartWithAxisProps,
): HorizontalBarChartWithAxisStyles => {
  const baseStyles = useStyles();

  return {
    opacityChangeOnHover: mergeClasses(hbcWithAxisClassNames.opacityChangeOnHover, baseStyles.opacityChangeOnHover),
    xAxisTicks: mergeClasses(hbcWithAxisClassNames.xAxisTicks, baseStyles.xAxisTicks),
    barLabel: mergeClasses(hbcWithAxisClassNames.barLabel, baseStyles.barLabel),
  };
};
