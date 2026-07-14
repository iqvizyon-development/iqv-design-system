import './define.js';

const itemRenderer = () => {
  const switchEl = document.createElement('iqv-switch');
  switchEl.appendChild(document.createTextNode('Switch'));
  return switchEl;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
