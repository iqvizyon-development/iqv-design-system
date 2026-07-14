'use client';

import type * as React from 'react';
import type { IqvizyonTriggerComponent } from '@iqvizyonui/react-utilities';
import type { TeachingPopoverTriggerProps } from './TeachingPopoverTrigger.types';
import { renderTeachingPopoverTrigger_unstable } from './renderTeachingPopoverTrigger';
import { useTeachingPopoverTrigger_unstable } from './useTeachingPopoverTrigger';

/**
 * Direct extension of PopoverTrigger - Wraps a trigger element as an only child and adds the necessary event handling to open a teaching bubble.
 */
export const TeachingPopoverTrigger: React.FC<TeachingPopoverTriggerProps> = props => {
  const state = useTeachingPopoverTrigger_unstable(props);

  return renderTeachingPopoverTrigger_unstable(state);
};

TeachingPopoverTrigger.displayName = 'TeachingPopoverTrigger';
// type casting here is required to ensure internal type IqvizyonTriggerComponent is not leaked
(TeachingPopoverTrigger as IqvizyonTriggerComponent).isIqvizyonTriggerComponent = true;
