import './define.js';

const itemRenderer = () => {
  const checkbox = document.createElement('iqv-checkbox');
  checkbox.appendChild(document.createTextNode('Checkbox'));
  return checkbox;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
