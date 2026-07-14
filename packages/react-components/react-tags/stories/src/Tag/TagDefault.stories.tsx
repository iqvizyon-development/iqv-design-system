import * as React from 'react';
import type { JSXElement, TagProps } from '@iqvizyonui/react-components';
import { Tag } from '@iqvizyonui/react-components';

export const Default = (props: Partial<TagProps>): JSXElement => <Tag {...props}>Primary text</Tag>;
