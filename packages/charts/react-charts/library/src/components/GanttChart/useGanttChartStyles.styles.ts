import type { GanttChartStyles, GanttChartProps } from '../../index';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';

/**
 * @internal
 */
export const ganttClassNames: SlotClassNames<GanttChartStyles> = {
  root: '',
  xAxis: '',
  yAxis: '',
  legendContainer: '',
  hover: '',
  descriptionMessage: '',
  tooltip: '',
  axisTitle: '',
  chartTitle: '',
  opacityChangeOnHover: '',
  shapeStyles: '',
  chartWrapper: '',
  svgTooltip: '',
  chart: '',
  axisAnnotation: '',
  plotContainer: '',
  annotationLayer: '',
};

/**
 * Apply styling to the GanttChart component
 */
export const useGanttChartStyles = (props: GanttChartProps): GanttChartStyles => {
  return {};
};
