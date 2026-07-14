import type { ComponentProps, ComponentState, Slot } from '@iqvizyonui/react-utilities';

export type TableResizeHandleSlots = {
  root: Slot<'div'>;
};

/**
 * TableResizeHandle Props
 */
export type TableResizeHandleProps = ComponentProps<TableResizeHandleSlots> & {};

/**
 * State used in rendering TableResizeHandle
 */
export type TableResizeHandleState = ComponentState<TableResizeHandleSlots>;
