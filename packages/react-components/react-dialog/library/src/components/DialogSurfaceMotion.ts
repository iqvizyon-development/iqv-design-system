import { createPresenceComponentVariant, motionTokens } from '@iqvizyonui/react-motion';
import { Scale } from '@iqvizyonui/react-motion-components-preview';

export const DialogSurfaceMotion = createPresenceComponentVariant(Scale, {
  outScale: 0.85,
  easing: motionTokens.curveDecelerateMid,
  duration: motionTokens.durationGentle,
  exitEasing: motionTokens.curveAccelerateMin,
  exitDuration: motionTokens.durationGentle,
});
