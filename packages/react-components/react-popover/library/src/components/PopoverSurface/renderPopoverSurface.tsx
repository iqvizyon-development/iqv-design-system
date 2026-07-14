/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */
import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';
import { Portal } from '@iqvizyonui/react-portal';
import type { PopoverSurfaceSlots, PopoverSurfaceState } from './PopoverSurface.types';

/**
 * Render the final JSX of PopoverSurface
 */
export const renderPopoverSurface_unstable = (state: PopoverSurfaceState): JSXElement => {
  assertSlots<PopoverSurfaceSlots>(state);

  const surface = (
    <state.root>
      {state.withArrow && <div ref={state.arrowRef} className={state.arrowClassName} />}
      {state.root.children}
    </state.root>
  );

  if (state.inline) {
    return surface;
  }

  return <Portal mountNode={state.mountNode}>{surface}</Portal>;
};
