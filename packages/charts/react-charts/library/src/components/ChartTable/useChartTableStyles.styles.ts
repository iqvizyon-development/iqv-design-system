'use client';

import type { GriffelStyle } from '@griffel/react';
import { makeStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@iqvizyonui/react-utilities';
import type { ChartTableProps, ChartTableStyles } from './ChartTable.types';
import { tokens, typographyStyles } from '@iqvizyonui/react-theme';
import { getChartTitleStyles, HighContrastSelector } from '../../utilities/index';

/**
 * @internal
 */
export const chartTableClassNames: SlotClassNames<ChartTableStyles> = {
  root: 'iui-ChartTable__root',
  table: 'iui-ChartTable__table',
  headerCell: 'iui-ChartTable__headerCell',
  bodyCell: 'iui-ChartTable__bodyCell',
  chart: 'iui-ChartTable__chart',
  chartTitle: 'iui-ChartTable__chartTitle',
  svgTooltip: 'iui-ChartTable__svgTooltip',
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    borderCollapse: 'collapse',
  },
  headerCell: {
    ...typographyStyles.caption1,
    fontWeight: tokens.fontWeightSemibold,
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
    padding: tokens.spacingHorizontalS,
    textAlign: 'left',
    border: `${tokens.strokeWidthThick} solid ${tokens.colorNeutralStroke2}`,
    '@media (forced-colors: active)': {
      backgroundColor: 'Window',
      color: 'WindowText',
    },
  },
  bodyCell: {
    ...typographyStyles.caption1,
    padding: tokens.spacingHorizontalS,
    border: `${tokens.strokeWidthThick} solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground1,
    textAlign: 'left',
    '@media (forced-colors: active)': {
      color: 'WindowText',
    },
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
 * Apply styling to the ChartTable slots based on the state
 */
export const useChartTableStyles = (props: ChartTableProps): ChartTableStyles => {
  const baseStyles = useStyles();

  return {
    root: mergeClasses(chartTableClassNames.root, baseStyles.root /*props.styles?.root*/),
    table: mergeClasses(chartTableClassNames.table, baseStyles.table /*props.styles?.table*/),
    headerCell: mergeClasses(chartTableClassNames.headerCell, baseStyles.headerCell /*props.styles?.headerCell*/),
    bodyCell: mergeClasses(chartTableClassNames.bodyCell, baseStyles.bodyCell /*props.styles?.bodyCell*/),
    chart: mergeClasses(chartTableClassNames.chart /*props.styles?.chart*/),
    chartTitle: mergeClasses(chartTableClassNames.chartTitle, baseStyles.chartTitle /*props.styles?.chartTitle*/),
    svgTooltip: mergeClasses(chartTableClassNames.svgTooltip, baseStyles.svgTooltip /*props.styles?.svgTooltip*/),
  };
};
