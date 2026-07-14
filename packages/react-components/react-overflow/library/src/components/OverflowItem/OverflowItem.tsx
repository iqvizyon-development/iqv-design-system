'use client';

import * as React from 'react';
import {
  applyTriggerPropsToChildren,
  getReactElementRef,
  type IqvizyonTriggerComponent,
  getTriggerChild,
  useMergedRefs,
} from '@iqvizyonui/react-utilities';
import { useOverflowItem } from '../../useOverflowItem';
import type { OverflowItemProps } from './OverflowItem.types';

/**
 * Attaches overflow item behavior to its child registered with the OverflowContext.
 * It does not render an element of its own.
 *
 * Behaves similarly to other `*Trigger` components in Iqvizyon UI React.
 */
export const OverflowItem = React.forwardRef((props: OverflowItemProps, ref) => {
  const { id, groupId, priority, pinned, children } = props;

  const containerRef = useOverflowItem(id, priority, groupId, pinned);
  const child = getTriggerChild(children);

  return applyTriggerPropsToChildren(children, {
    ref: useMergedRefs(containerRef, ref, getReactElementRef(child)),
  });
});

// type casting here is required to ensure internal type IqvizyonTriggerComponent is not leaked
(OverflowItem as IqvizyonTriggerComponent).isIqvizyonTriggerComponent = true;
