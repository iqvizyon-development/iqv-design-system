import type { ComponentProps, ComponentState, Slot } from '@iqvizyonui/react-utilities';

export type MenuDividerSlots = {
  root: Slot<'div'>;
};

export type MenuDividerProps = ComponentProps<MenuDividerSlots>;

export type MenuDividerState = ComponentState<MenuDividerSlots>;
