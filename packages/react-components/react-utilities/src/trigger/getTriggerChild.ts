import * as React from 'react';
import { isIqvizyonTrigger } from './isIqvizyonTrigger';
import type { TriggerProps } from './types';

/**
 * Gets the trigger element of an IqvizyonTriggerComponent (such as Tooltip or MenuTrigger).
 *
 * In the case where the immediate child is itself an IqvizyonTriggerComponent and/or React Fragment,
 * it returns the first descendant that is _not_ an IqvizyonTriggerComponent or Fragment.
 * This allows multiple triggers to be stacked, and still apply their props to the actual trigger element.
 *
 * For example, the following returns `<div id="child" />`:
 * ```jsx
 * getTriggerChild(
 *   <Tooltip>
 *     <MenuTrigger>
 *       <div id="child" />
 *     </MenuTrigger>
 *   </Tooltip>
 * );
 * ```
 *
 * In the case where the immediate child is not a valid element,
 * null is returned
 *
 * @internal
 */
export function getTriggerChild<TriggerChildProps>(
  children: TriggerProps<TriggerChildProps>['children'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): (React.ReactElement<Partial<TriggerChildProps>> & { ref?: React.Ref<any> }) | null {
  if (!React.isValidElement<TriggerChildProps>(children)) {
    return null;
  }
  return isIqvizyonTrigger(children)
    ? getTriggerChild(
        // FIXME: This casting should be unnecessary as isIqvizyonTrigger is a guard type method,
        // but for some reason it's failing on build
        (children.props as TriggerProps).children,
      )
    : children;
}
