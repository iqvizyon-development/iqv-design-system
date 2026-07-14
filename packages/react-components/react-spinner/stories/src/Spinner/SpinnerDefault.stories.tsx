import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Spinner } from '@iqvizyonui/react-components';
import type { SpinnerProps } from '@iqvizyonui/react-components';

export const Default = (props: Partial<SpinnerProps>): JSXElement => <Spinner {...props} />;
