import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { CompoundButton } from '@iqvizyonui/react-components';
import { CalendarMonthRegular } from '@fluentui/react-icons';
import type { CompoundButtonProps } from '@iqvizyonui/react-components';

export const Default = (props: CompoundButtonProps): JSXElement => (
  <CompoundButton icon={<CalendarMonthRegular />} secondaryContent="Secondary content" {...props}>
    Example
  </CompoundButton>
);
