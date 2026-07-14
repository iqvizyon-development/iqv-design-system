import './define.js';

const itemRenderer = () => {
  const dialog = document.createElement('iqv-dialog');
  dialog.appendChild(document.createTextNode('Dialog'));

  return dialog;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
