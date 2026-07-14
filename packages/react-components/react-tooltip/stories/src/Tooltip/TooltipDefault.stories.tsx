import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';

import { Button, Tooltip } from '@iqvizyonui/react-components';
import { SlideTextRegular } from '@fluentui/react-icons';
import type { TooltipProps } from '@iqvizyonui/react-components';

export const Default = (props: Partial<TooltipProps>): JSXElement => (
  <Tooltip content="Example tooltip" relationship="label" {...props}>
    <Button icon={<SlideTextRegular />} size="large" />
  </Tooltip>
);

Default.parameters = {
  docs: {
    description: {
      story: `By default, Tooltip appears above its target element, when it is focused or hovered.`,
    },
  },
};
