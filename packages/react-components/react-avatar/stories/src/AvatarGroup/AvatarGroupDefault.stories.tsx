import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  partitionAvatarGroupItems,
} from '@iqvizyonui/react-components';
import type { AvatarGroupProps } from '@iqvizyonui/react-components';

const names = [
  'Johnie McConnell',
  'Allan Munger',
  'Erik Nason',
  'Kristin Patterson',
  'Daisy Phillips',
  'Carole Poland',
  'Carlos Slattery',
  'Robert Tolbert',
  'Kevin Sturgis',
  'Charlotte Waltson',
  'Elliot Woodward',
];

export const Default = (props: Partial<AvatarGroupProps>): JSXElement => {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({ items: names });

  return (
    <AvatarGroup {...props}>
      {inlineItems.map(name => (
        <AvatarGroupItem name={name} key={name} />
      ))}
      {overflowItems && (
        <AvatarGroupPopover>
          {overflowItems.map(name => (
            <AvatarGroupItem name={name} key={name} />
          ))}
        </AvatarGroupPopover>
      )}
    </AvatarGroup>
  );
};
