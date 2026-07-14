import './define.js';

const itemRenderer = () => {
  const tab = document.createElement('iqv-tab');
  tab.appendChild(document.createTextNode('tab'));
  return tab;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
