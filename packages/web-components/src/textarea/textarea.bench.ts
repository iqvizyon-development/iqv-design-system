import './define.js';

const itemRenderer = () => {
  const textarea = document.createElement('iqv-textarea');
  return textarea;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
