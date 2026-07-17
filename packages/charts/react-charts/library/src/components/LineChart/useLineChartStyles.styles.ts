'use client';

import type { GriffelStyle } from '@griffel/react';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@iqvizyonui/react-theme';
import type { LineChartProps, LineChartStyles } from './LineChart.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { HighContrastSelector } from '../../utilities/index';
import { getMarkerLabelStyle, getTooltipStyle } from '../../utilities/index';

/**
 * @internal
 */
export const linechartClassNames: SlotClassNames<LineChartStyles> = {
  tooltip: 'iui-line__tooltip',
  lineBorder: 'iui-line_lineBorder',
  markerLabel: 'iui-line__markerLabel',
  root: 'iui-line__root',
  xAxis: 'iui-line__xAxis',
  yAxis: 'iui-line__yAxis',
  legendContainer: 'iui-line__legendContainer',
  hover: 'iui-line__hover',
  descriptionMessage: 'iui-line__descriptionMessage',
  axisTitle: 'iui-line__axisTitle',
  chartTitle: 'iui-line__chartTitle',
  opacityChangeOnHover: 'iui-line__opacityChangeOnHover',
  shapeStyles: 'iui-line__shapeStyles',
  chartWrapper: 'iui-line__chartWrapper',
  svgTooltip: '',
  chart: '',
  axisAnnotation: '',
  plotContainer: '',
  annotationLayer: '',
};

/**
 * Base Styles
 */
const useStyles = makeStyles({
  tooltip: getTooltipStyle() as GriffelStyle,
  markerLabel: getMarkerLabelStyle() as GriffelStyle,
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
export const useLineChartStyles = (props: LineChartProps): LineChartStyles => {
  const baseStyles = useStyles();
  return {
    tooltip: mergeClasses(linechartClassNames.tooltip, baseStyles.tooltip /*props.styles?.tooltip*/),
    lineBorder: mergeClasses(linechartClassNames.lineBorder, baseStyles.lineBorder /*props.styles?.lineBorder*/),
    markerLabel: mergeClasses(linechartClassNames.markerLabel, baseStyles.markerLabel /*props.styles?.markerLabel*/),
  };
};
