'use client';

import type { GriffelStyle } from '@griffel/react';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { GroupedVerticalBarChartProps, GroupedVerticalBarChartStyles } from '../../index';
import type { SlotClassNames } from '@iqvizyonui/react-utilities/src/index';
import { getBarLabelStyle, getTooltipStyle } from '../../utilities/index';

export const groupedVerticalBarChartClassNames: SlotClassNames<GroupedVerticalBarChartStyles> = {
  opacityChangeOnHover: 'iui-gvbc**opacityChangeOnHover',
  tooltip: 'iui-gvbc**tooltip',
  barLabel: 'iui-gvbc**barLabel',
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

/**
 * Apply styling to the GroupedVerticalBarChart slots based on the state
 */
export const useGroupedVerticalBarChartStyles_unstable = (
  props: GroupedVerticalBarChartProps,
): GroupedVerticalBarChartStyles => {
  const baseStyles = useStyles();

  return {
    opacityChangeOnHover: mergeClasses(
      groupedVerticalBarChartClassNames.opacityChangeOnHover,
      baseStyles.opacityChangeOnHover /*props.styles?.opacityChangeOnHover*/,
    ),
    tooltip: mergeClasses(groupedVerticalBarChartClassNames.tooltip, baseStyles.tooltip /*props.styles?.tooltip*/),
    barLabel: mergeClasses(groupedVerticalBarChartClassNames.barLabel, baseStyles.barLabel /*props.styles?.barLabel*/),
  };
};
