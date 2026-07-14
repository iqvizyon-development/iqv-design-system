import type * as React from 'react';
import type { IqvizyonTriggerComponent, TriggerProps } from './types';

/**
 * Checks if a given element is an Iqvizyon trigger (e.g. `MenuTrigger` or `Tooltip`).
 * See the {@link IqvizyonTriggerComponent} type for more info.
 *
 * @internal
 */
export function isIqvizyonTrigger(element: React.ReactElement): element is React.ReactElement<TriggerProps> {
  return Boolean((element.type as IqvizyonTriggerComponent).isIqvizyonTriggerComponent);
}
