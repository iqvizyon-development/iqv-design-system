'use client';

import * as React from 'react';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from '@iqvizyonui/react-menu';
import { MenuButton } from '@iqvizyonui/react-button';
import { useOverflowMenu } from '@iqvizyonui/react-overflow';

export const OverflowMenu: React.FC<{
  itemIds: string[];
  title: string;
  items: JSXElement[];
}> = ({ itemIds, title, items }) => {
  const { ref, overflowCount, isOverflowing } = useOverflowMenu<HTMLButtonElement>();
  let displayLabel = title;
  displayLabel = title === '' ? `+${overflowCount} items` : `+${overflowCount} ${title}`;

  if (!isOverflowing) {
    return null;
  }
  const remainingItemsCount = itemIds.length - overflowCount;
  const menuList = [];
  for (let i = remainingItemsCount; i < itemIds.length; i++) {
    const buttonElement = items[i];
    menuList.push(
      <MenuItem
        tabIndex={-1}
        key={i}
        onClick={e => {
          const button = buttonElement.props;
          if (button.onClick) {
            button.onClick(e);
          }
        }}
      >
        {buttonElement}
      </MenuItem>,
    );
  }
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>{displayLabel}</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>{menuList}</MenuList>
      </MenuPopover>
    </Menu>
  );
};
