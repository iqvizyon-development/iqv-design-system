'use client';

import type { GriffelStyle } from '@griffel/react';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@iqvizyonui/react-theme';
import type { FunnelChartProps, FunnelChartStyles } from './index';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import { getChartTitleStyles, HighContrastSelector } from '../../utilities/index';

/**
 * @internal
 */
export const funnelClassNames: SlotClassNames<FunnelChartStyles> = {
  root: 'iui-funnel__root',
  chart: 'iui-funnel__chart',
  text: 'iui-funnel__text',
  calloutContentRoot: 'iui-funnel__callout-content-root',
  chartTitle: 'iui-funnel__chartTitle',
  svgTooltip: 'iui-funnel__svgTooltip',
};

/**
 * Base Styles
 */
const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    position: 'relative',
    textAlign: 'left',
  },
  chart: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  text: {
    pointerEvents: 'none',
    fontWeight: tokens.fontWeightSemibold,
    fill: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
  },
  calloutContentRoot: {
    maxWidth: '238px',
  },
  chartTitle: getChartTitleStyles() as GriffelStyle,
  svgTooltip: {
    fill: tokens.colorNeutralBackground1,
    [HighContrastSelector]: {
      fill: 'Canvas',
    },
  },
});

/**
 * Apply styling to the FunnelChart component
 */
export const useFunnelChartStyles = (props: FunnelChartProps): FunnelChartStyles => {
  const { className } = props;
  const baseStyles = useStyles();

  return {
    root: mergeClasses(funnelClassNames.root, baseStyles.root, className, props.styles?.root),
    chart: mergeClasses(funnelClassNames.chart, baseStyles.chart, props.styles?.chart),
    text: mergeClasses(funnelClassNames.text, baseStyles.text, props.styles?.text),
    calloutContentRoot: mergeClasses(baseStyles.calloutContentRoot, props.styles?.calloutContentRoot),
    chartTitle: mergeClasses(funnelClassNames.chartTitle, baseStyles.chartTitle, props.styles?.chartTitle),
    svgTooltip: mergeClasses(funnelClassNames.svgTooltip, baseStyles.svgTooltip, props.styles?.svgTooltip),
  };
};
