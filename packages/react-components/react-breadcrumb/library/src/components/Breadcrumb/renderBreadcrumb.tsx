/** @jsxRuntime automatic */
/** @jsxImportSource @iqvizyonui/react-jsx-runtime */

import { assertSlots } from '@iqvizyonui/react-utilities';
import type { JSXElement } from '@iqvizyonui/react-utilities';

import { BreadcrumbProvider } from './BreadcrumbContext';
import type { BreadcrumbBaseState, BreadcrumbSlots, BreadcrumbContextValues } from './Breadcrumb.types';
/**
 * Render the final JSX of Breadcrumb
 */
export const renderBreadcrumb_unstable = (
  state: BreadcrumbBaseState,
  contextValues: BreadcrumbContextValues,
): JSXElement => {
  assertSlots<BreadcrumbSlots>(state);
  return (
    <state.root>
      <BreadcrumbProvider value={contextValues}>
        {state.list && <state.list>{state.root.children}</state.list>}
      </BreadcrumbProvider>
    </state.root>
  );
};
