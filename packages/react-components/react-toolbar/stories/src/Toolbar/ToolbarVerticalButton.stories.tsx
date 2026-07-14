import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { FontIncreaseRegular, FontDecreaseRegular, TextFontRegular } from '@fluentui/react-icons';
import { Toolbar, ToolbarButton } from '@iqvizyonui/react-components';
import type { ToolbarProps } from '@iqvizyonui/react-components';

export const VerticalButton = (props: Partial<ToolbarProps>): JSXElement => (
  <Toolbar aria-label="Vertical Button" {...props}>
    <ToolbarButton vertical appearance="primary" icon={<FontIncreaseRegular />}>
      Increase
    </ToolbarButton>
    <ToolbarButton vertical icon={<FontDecreaseRegular />}>
      Decrease
    </ToolbarButton>
    <ToolbarButton vertical icon={<TextFontRegular />}>
      Reset
    </ToolbarButton>
  </Toolbar>
);
