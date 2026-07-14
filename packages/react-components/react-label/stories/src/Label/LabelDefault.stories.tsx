import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Label } from '@iqvizyonui/react-components';
import type { LabelProps } from '@iqvizyonui/react-components';

export const Default = (props: LabelProps): JSXElement => <Label {...props}>This is a label</Label>;
