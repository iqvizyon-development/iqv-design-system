'use client';

import { tokens, typographyStyles } from '@iqvizyonui/react-theme';
import type { SlotClassNames } from '@iqvizyonui/react-utilities/src/index';
import type { GriffelStyle } from '@griffel/react';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { GaugeChartProps, GaugeChartStyles } from './GaugeChart.types';
import { getChartTitleStyles, HighContrastSelector } from '../../utilities/index';

export const gaugeChartClassNames: SlotClassNames<GaugeChartStyles> = {
  root: 'iui-gc__root',
  chart: 'iui-gc__chart',
  limits: 'iui-gc__limits',
  chartValue: 'iui-gc__chartValue',
  sublabel: 'iui-gc__sublabel',
  needle: 'iui-gc__needle',
  chartTitle: 'iui-gc__chartTitle',
  segment: 'iui-gc__segment',
  gradientSegment: 'iui-gc__gradientSegment',
  calloutContentRoot: 'iui-gc__calloutContentRoot',
  calloutDateTimeContainer: 'iui-gc__calloutDateTimeContainer',
  calloutContentX: 'iui-gc__calloutContentX',
  calloutBlockContainer: 'iui-gc__calloutBlockContainer',
  shapeStyles: 'iui-gc__shapeStyles',
  calloutlegendText: 'iui-gc__calloutlegendText',
  calloutContentY: 'iui-gc__calloutContentY',
  descriptionMessage: 'iui-gc__descriptionMessage',
  calloutInfoContainer: '',
  legendsContainer: 'iui-gc__legendsContainer',
  chartWrapper: 'iui-gc__chartWrapper',
  svgTooltip: 'iui-gc__svgTooltip',
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
  limits: {
    ...typographyStyles.caption1Strong,
    fill: tokens.colorNeutralForeground1,
    forcedColorAdjust: 'auto',
  },
  chartValue: {
    fontWeight: tokens.fontWeightSemibold,
    fill: tokens.colorNeutralForeground1,
    forcedColorAdjust: 'auto',
  },
  sublabel: {
    ...typographyStyles.caption1Strong,
    fill: tokens.colorNeutralForeground1,
    forcedColorAdjust: 'auto',
  },
  needle: {
    fill: tokens.colorNeutralForeground1,
    stroke: tokens.colorNeutralBackground1,
  },
  svgTooltip: {
    fill: tokens.colorNeutralBackground1,
    [HighContrastSelector]: {
      fill: 'Canvas',
    },
  },
  chartTitle: getChartTitleStyles() as GriffelStyle,
  segment: {
    outline: 'none',
    stroke: tokens.colorStrokeFocus2,
  },
  gradientSegment: {
    width: '100%',
    height: '100%',
  },
  calloutContentRoot: {
    display: 'grid',
    overflow: 'hidden',
    backgroundColor: tokens.colorNeutralBackground1,
    backgroundBlendMode: 'normal, luminosity',
  },
  calloutDateTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calloutContentX: {
    ...typographyStyles.caption1,
    lineHeight: '16px',
    opacity: '0.85',
  },
  calloutBlockContainer: {
    ...typographyStyles.body1Strong,
    marginTop: '13px',
    color: tokens.colorNeutralForeground1,
    paddingLeft: '8px',
    display: 'block',
    forcedColorAdjust: 'none',
  },
  shapeStyles: {
    marginRight: '8px',
  },
  calloutlegendText: {
    ...typographyStyles.caption1,
    lineHeight: '16px',
    color: tokens.colorNeutralForeground2,
    forcedColorAdjust: 'auto',
  },
  calloutContentY: {
    ...typographyStyles.body1Strong,
    lineHeight: '22px',
    forcedColorAdjust: 'auto',
  },
  descriptionMessage: {
    ...typographyStyles.caption1,
    color: tokens.colorNeutralForeground1,
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  legendsContainer: {
    width: '100%',
  },
});
export const useGaugeChartStyles = (props: GaugeChartProps): GaugeChartStyles => {
  const baseStyles = useStyles();

  return {
    root: mergeClasses(gaugeChartClassNames.root, baseStyles.root, props.styles?.root),
    chart: mergeClasses(gaugeChartClassNames.chart, baseStyles.chart, props.styles?.chart),
    limits: mergeClasses(gaugeChartClassNames.limits, baseStyles.limits, props.styles?.limits),
    chartValue: mergeClasses(gaugeChartClassNames.chartValue, baseStyles.chartValue, props.styles?.chartValue),
    sublabel: mergeClasses(gaugeChartClassNames.sublabel, baseStyles.sublabel, props.styles?.sublabel),
    needle: mergeClasses(gaugeChartClassNames.needle, baseStyles.needle, props.styles?.needle),
    chartTitle: mergeClasses(gaugeChartClassNames.chartTitle, baseStyles.chartTitle, props.styles?.chartTitle),
    svgTooltip: mergeClasses(gaugeChartClassNames.svgTooltip, baseStyles.svgTooltip, props.styles?.svgTooltip),
    segment: mergeClasses(gaugeChartClassNames.segment, baseStyles.segment, props.styles?.segment),
    gradientSegment: mergeClasses(
      gaugeChartClassNames.gradientSegment,
      baseStyles.gradientSegment,
      props.styles?.gradientSegment,
    ),
    calloutContentRoot: mergeClasses(
      gaugeChartClassNames.calloutContentRoot,
      baseStyles.calloutContentRoot,
      props.styles?.calloutContentRoot,
    ),
    calloutDateTimeContainer: mergeClasses(
      gaugeChartClassNames.calloutDateTimeContainer,
      baseStyles.calloutDateTimeContainer,
      props.styles?.calloutDateTimeContainer,
    ),
    calloutContentX: mergeClasses(
      gaugeChartClassNames.calloutContentX,
      baseStyles.calloutContentX,
      props.styles?.calloutContentX,
    ),
    calloutBlockContainer: mergeClasses(
      gaugeChartClassNames.calloutBlockContainer,
      baseStyles.calloutBlockContainer,
      props.styles?.calloutBlockContainer,
    ),
    shapeStyles: mergeClasses(gaugeChartClassNames.shapeStyles, baseStyles.shapeStyles, props.styles?.shapeStyles),
    calloutlegendText: mergeClasses(
      gaugeChartClassNames.calloutlegendText,
      baseStyles.calloutlegendText,
      props.styles?.calloutlegendText,
    ),
    calloutContentY: mergeClasses(
      gaugeChartClassNames.calloutContentY,
      baseStyles.calloutContentY,
      props.styles?.calloutContentY,
    ),
    descriptionMessage: mergeClasses(
      gaugeChartClassNames.descriptionMessage,
      baseStyles.descriptionMessage,
      props.styles?.descriptionMessage,
    ),
    chartWrapper: mergeClasses(gaugeChartClassNames.chartWrapper, props.styles?.chartWrapper),
    legendsContainer: mergeClasses(
      gaugeChartClassNames.legendsContainer,
      baseStyles.legendsContainer,
      props.styles?.legendsContainer,
    ),
  };
};
