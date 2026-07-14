import type { ComponentProps, ComponentState, Slot } from '@iqvizyonui/react-utilities';

export type ToastFooterSlots = {
  root: Slot<'div'>;
};

/**
 * ToastFooter Props
 */
export type ToastFooterProps = ComponentProps<ToastFooterSlots> & {};

/**
 * State used in rendering ToastFooter
 */
export type ToastFooterState = ComponentState<ToastFooterSlots>;
