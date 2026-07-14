import './define.js';

const itemRenderer = () => {
  const badge = document.createElement('iqv-badge');
  badge.appendChild(document.createTextNode('Badge'));
  return badge;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
