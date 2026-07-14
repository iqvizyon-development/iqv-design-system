'use client';

import { makeStyles, mergeClasses } from '@griffel/react';
import type { PolarChartStyles, PolarChartProps } from './PolarChart.types';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { tokens, typographyStyles } from '@iqvizyonui/react-theme';

/**
 * @internal
 */
export const polarChartClassNames: SlotClassNames<PolarChartStyles> = {
  root: 'iui-polar__root',
  chartWrapper: 'iui-polar__chartWrapper',
  chart: 'iui-polar__chart',
  gridLineInner: 'iui-polar__gridLineInner',
  gridLineOuter: 'iui-polar__gridLineOuter',
  tickLabel: 'iui-polar__tickLabel',
  legendContainer: 'iui-polar__legendContainer',
};

const useStyles = makeStyles({
  root: {
    ...typographyStyles.body1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textAlign: 'left',
  },

  chart: {
    display: 'block',
  },

  gridLine: {
    fill: 'none',
    stroke: tokens.colorNeutralForeground1,
    strokeWidth: '1px',
  },

  gridLineInner: {
    opacity: 0.2,
  },

  gridLineOuter: {
    opacity: 1,
  },

  tickLabel: {
    ...typographyStyles.caption2Strong,
    fill: tokens.colorNeutralForeground1,
  },

  legendContainer: {
    width: '100%',
  },
});

/**
 * Apply styling to the PolarChart component
 */
export const usePolarChartStyles = (props: PolarChartProps): PolarChartStyles => {
  const baseStyles = useStyles();

  return {
    root: mergeClasses(polarChartClassNames.root, baseStyles.root, props.styles?.root),
    chartWrapper: mergeClasses(polarChartClassNames.chartWrapper, props.styles?.chartWrapper),
    chart: mergeClasses(polarChartClassNames.chart, baseStyles.chart, props.styles?.chart),
    gridLineInner: mergeClasses(
      polarChartClassNames.gridLineInner,
      baseStyles.gridLine,
      baseStyles.gridLineInner,
      props.styles?.gridLineInner,
    ),
    gridLineOuter: mergeClasses(
      polarChartClassNames.gridLineOuter,
      baseStyles.gridLine,
      baseStyles.gridLineOuter,
      props.styles?.gridLineOuter,
    ),
    tickLabel: mergeClasses(polarChartClassNames.tickLabel, baseStyles.tickLabel, props.styles?.tickLabel),
    legendContainer: mergeClasses(
      polarChartClassNames.legendContainer,
      baseStyles.legendContainer,
      props.styles?.legendContainer,
    ),
  };
};
