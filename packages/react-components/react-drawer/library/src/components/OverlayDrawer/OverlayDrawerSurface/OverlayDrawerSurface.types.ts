import type { DialogSurfaceProps, DialogSurfaceSlots } from '@iqvizyonui/react-dialog';
import type { ComponentProps, Slot } from '@iqvizyonui/react-utilities';

/**
 * OverlayDrawerSurface slots
 */
export type OverlayDrawerSurfaceSlots = Partial<Pick<DialogSurfaceSlots, 'backdrop' | 'backdropMotion'>> & {
  root: Slot<'div', 'aside'>;
};

/**
 * OverlayDrawerSurface Props
 */
export type OverlayDrawerSurfaceProps = ComponentProps<OverlayDrawerSurfaceSlots> &
  Pick<DialogSurfaceProps, 'mountNode'>;
