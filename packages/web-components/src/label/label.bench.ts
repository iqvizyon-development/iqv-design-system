import './define.js';

const itemRenderer = () => {
  const label = document.createElement('iqv-label');
  label.appendChild(document.createTextNode('Label'));
  return label;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
