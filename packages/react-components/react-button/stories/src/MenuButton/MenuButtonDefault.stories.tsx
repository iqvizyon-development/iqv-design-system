import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';
import { Menu, MenuButton, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@iqvizyonui/react-components';

export const Default = (): JSXElement => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <MenuButton>Example</MenuButton>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem>Item a</MenuItem>
        <MenuItem>Item b</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
