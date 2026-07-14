import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { teamsLightTheme } from '@iqvizyonui/react-components';
import type { StrokeWidthTokens } from '@iqvizyonui/react-components';

const theme = teamsLightTheme;

export const StrokeWidths = (): JSXElement => {
  const strokeWidthTokens = Object.keys(theme).filter(tokenName =>
    tokenName.startsWith('strokeWidth'),
  ) as (keyof StrokeWidthTokens)[];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', alignItems: 'center' }}>
      {strokeWidthTokens.map((strokeWidth: keyof StrokeWidthTokens) => [
        <div key={strokeWidth}>{strokeWidth}</div>,
        <div key={`${strokeWidth}-value`} style={{ borderBottom: `${theme[strokeWidth]} solid black` }} />,
      ])}
    </div>
  );
};
