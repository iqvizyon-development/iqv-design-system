import './define.js';

const itemRenderer = () => {
  const btn = document.createElement('iqv-menu-button');
  btn.appendChild(document.createTextNode('Menu button'));
  return btn;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
