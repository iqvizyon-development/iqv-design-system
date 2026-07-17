'use client';

import type { GriffelStyle } from '@griffel/react';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { VerticalBarChartProps, VerticalBarChartStyles } from '../../index';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { tokens } from '@iqvizyonui/react-theme';
import { HighContrastSelector } from '../../utilities/utilities';
import { getBarLabelStyle, getTooltipStyle } from '../../utilities/index';

export const verticalbarchartClassNames: SlotClassNames<VerticalBarChartStyles> = {
  opacityChangeOnHover: 'iui-vbc__opacityChangeOnHover',
  tooltip: 'iui-vbc__tooltip',
  barLabel: 'iui-vbc__barLabel',
  lineBorder: 'iui-vbc_lineBorder',
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
  opacityChangeOnHover: {},
  tooltip: getTooltipStyle() as GriffelStyle,
  barLabel: getBarLabelStyle() as GriffelStyle,
  lineBorder: {
    stroke: tokens.colorNeutralBackground1,
    [HighContrastSelector]: {
      stroke: 'Canvas',
    },
  },
});

/**
 * Apply styling to the Carousel slots based on the state
 */
export const useVerticalBarChartStyles = (props: VerticalBarChartProps): VerticalBarChartStyles => {
  const baseStyles = useStyles();

  return {
    opacityChangeOnHover: mergeClasses(
      verticalbarchartClassNames.opacityChangeOnHover,
      baseStyles.opacityChangeOnHover /*props.styles?.opacityChangeOnHover*/,
    ),
    tooltip: mergeClasses(verticalbarchartClassNames.tooltip, baseStyles.tooltip /*props.styles?.tooltip*/),
    barLabel: mergeClasses(verticalbarchartClassNames.barLabel, baseStyles.barLabel /*props.styles?.barLabel*/),
    lineBorder: mergeClasses(verticalbarchartClassNames.lineBorder, baseStyles.lineBorder /*props.styles?.lineBorder*/),
  };
};
