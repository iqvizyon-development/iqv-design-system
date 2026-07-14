import type { ComponentProps, ComponentState, DistributiveOmit } from '@iqvizyonui/react-utilities';
import type { ToggleButtonProps, ButtonSlots, ToggleButtonState } from '@iqvizyonui/react-button';

/**
 * ToolbarRadioButton Props
 */
export type ToolbarRadioButtonProps = ComponentProps<ButtonSlots> &
  Partial<Pick<ToggleButtonProps, 'disabled' | 'disabledFocusable' | 'size'>> & {
    appearance?: 'primary' | 'subtle' | 'transparent';
    name: string;
    value: string;
  };

export type ToolbarRadioButtonBaseProps = DistributiveOmit<ToolbarRadioButtonProps, 'appearance'>;

/**
 * State used in rendering ToolbarRadioButton
 */
export type ToolbarRadioButtonState = ComponentState<Partial<ButtonSlots>> &
  ToggleButtonState &
  Required<Pick<ToggleButtonProps, 'checked'>> &
  Pick<ToolbarRadioButtonProps, 'name' | 'value'>;

export type ToolbarRadioButtonBaseState = DistributiveOmit<ToolbarRadioButtonState, 'appearance' | 'size' | 'shape'>;
