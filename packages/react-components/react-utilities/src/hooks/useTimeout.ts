'use client';

import { useBrowserTimer } from './useBrowserTimer';
import { useIqvizyon_unstable as useIqvizyon } from '@iqvizyonui/react-shared-contexts';

const setTimeoutNoop = (_callback: Function) => -1;
const clearTimeoutNoop = (_handle: number) => undefined;

/**
 * Helper to manage a browser timeout.
 * Ensures that the timeout isn't set multiple times at once and is cleaned up
 * when the component is unloaded.
 *
 * @internal
 * @returns A pair of [setTimeout, clearTimeout] that are stable between renders.
 */
export function useTimeout(): readonly [(fn: () => void, delay?: number) => number, () => void] {
  const { targetDocument } = useIqvizyon();
  const win = targetDocument?.defaultView;

  const setTimerFn = win ? win.setTimeout : setTimeoutNoop;
  const clearTimerFn = win ? win.clearTimeout : clearTimeoutNoop;

  return useBrowserTimer(setTimerFn, clearTimerFn);
}
