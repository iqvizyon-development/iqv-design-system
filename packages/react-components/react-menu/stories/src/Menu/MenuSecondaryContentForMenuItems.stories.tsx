import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-components';

import { Button, Menu, MenuTrigger, MenuList, MenuItem, MenuPopover } from '@iqvizyonui/react-components';

export const SecondaryContentForMenuItems = (): JSXElement => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem secondaryContent="Ctrl+N">New File</MenuItem>
        <MenuItem secondaryContent="Ctrl+Shift+N">New Window</MenuItem>
        <MenuItem secondaryContent="Ctrl+T" disabled>
          New Tab
        </MenuItem>
        <MenuItem secondaryContent="Ctrl+O">Open File</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);
