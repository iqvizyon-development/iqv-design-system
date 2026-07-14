import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Calendar } from '@iqvizyonui/react-calendar-compat';
import type { CalendarProps } from '@iqvizyonui/react-calendar-compat';

export const Default = (props: CalendarProps): JSXElement => <Calendar {...props} />;
