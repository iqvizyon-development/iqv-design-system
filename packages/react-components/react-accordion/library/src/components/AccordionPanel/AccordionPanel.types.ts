import type { PresenceMotionSlotProps } from '@iqvizyonui/react-motion';
import type { CollapseParams } from '@iqvizyonui/react-motion-components-preview';
import type { ComponentProps, ComponentState, Slot } from '@iqvizyonui/react-utilities';

export type AccordionPanelSlots = {
  root: NonNullable<Slot<'div'>>;
  collapseMotion?: Slot<PresenceMotionSlotProps<CollapseParams>>;
};

export type AccordionPanelProps = ComponentProps<AccordionPanelSlots>;

export type AccordionPanelBaseProps = ComponentProps<Omit<AccordionPanelSlots, 'collapseMotion'>>;

export type AccordionPanelState = ComponentState<AccordionPanelSlots> & {
  /**
   * Internal open state, provided by context.
   */
  open: boolean;
};

export type AccordionPanelBaseState = ComponentState<Omit<AccordionPanelSlots, 'collapseMotion'>> &
  Pick<AccordionPanelState, 'open'>;
