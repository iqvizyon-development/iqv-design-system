'use client';

import type { GriffelStyle } from '@griffel/react';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { ScatterChartProps, ScatterChartStyles } from './ScatterChart.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities/src/index';
import { getMarkerLabelStyle, getTooltipStyle } from '../../utilities/index';

/**
 * @internal
 */
export const scatterChartClassNames: SlotClassNames<ScatterChartStyles> = {
  tooltip: 'iui-line__tooltip',
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
});

/**
 * Apply styling to the Carousel slots based on the state
 */
export const useScatterChartStyles = (props: ScatterChartProps): ScatterChartStyles => {
  const baseStyles = useStyles();
  return {
    tooltip: mergeClasses(scatterChartClassNames.tooltip, baseStyles.tooltip /*props.styles?.tooltip*/),
    markerLabel: mergeClasses(scatterChartClassNames.markerLabel, baseStyles.markerLabel, props.styles?.markerLabel),
  };
};
