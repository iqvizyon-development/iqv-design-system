import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, SplitButton } from '@iqvizyonui/react-components';
import type { MenuButtonProps } from '@iqvizyonui/react-components';

const onClick = () => alert('Primary action button clicked.');

const primaryActionButtonProps = {
  onClick,
};

export const Default = (): JSXElement => (
  <Menu positioning="below-end">
    <MenuTrigger disableButtonEnhancement>
      {(triggerProps: MenuButtonProps) => (
        <SplitButton menuButton={triggerProps} primaryActionButton={primaryActionButtonProps}>
          Example
        </SplitButton>
      )}
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem>Item a</MenuItem>
        <MenuItem>Item b</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
