'use client';

import type { GriffelStyle } from '@griffel/react';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { VerticalStackedBarChartProps, VerticalStackedBarChartStyles } from './VerticalStackedBarChart.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities/src/index';
import { getBarLabelStyle, getTooltipStyle } from '../../utilities/index';

export const verticalstackedbarchartClassNames: SlotClassNames<VerticalStackedBarChartStyles> = {
  opacityChangeOnHover: 'iui-vsbc__opacityChangeOnHover',
  tooltip: 'iui-vsbc__tooltip',
  barLabel: 'iui-vsbc__barLabel',
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
    cursor: 'default',
  },
  tooltip: getTooltipStyle() as GriffelStyle,
  barLabel: getBarLabelStyle() as GriffelStyle,
});

export const useVerticalStackedBarChartStyles = (
  props: VerticalStackedBarChartProps,
): VerticalStackedBarChartStyles => {
  const baseStyles = useStyles();

  return {
    opacityChangeOnHover: mergeClasses(
      verticalstackedbarchartClassNames.opacityChangeOnHover,
      baseStyles.opacityChangeOnHover,
      props.href ? 'pointer' : 'default',
    ),
    tooltip: mergeClasses(verticalstackedbarchartClassNames.tooltip, baseStyles.tooltip),
    barLabel: mergeClasses(verticalstackedbarchartClassNames.barLabel, baseStyles.barLabel),
  };
};
