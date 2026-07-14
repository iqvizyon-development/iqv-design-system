export const EVENTS = {
  show: 'iui-toast-show',
  dismiss: 'iui-toast-dismiss',
  dismissAll: 'iui-toast-dismiss-all',
  update: 'iui-toast-update',
  pause: 'iui-toast-pause',
  play: 'iui-toast-play',
} as const;

export const TOAST_POSITIONS = {
  bottom: 'bottom',
  bottomEnd: 'bottom-end',
  bottomStart: 'bottom-start',
  top: 'top',
  topEnd: 'top-end',
  topStart: 'top-start',
} as const;
