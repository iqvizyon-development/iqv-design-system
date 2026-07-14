import './define.js';

const itemRenderer = () => {
  const slider = document.createElement('iqv-slider');
  return slider;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
