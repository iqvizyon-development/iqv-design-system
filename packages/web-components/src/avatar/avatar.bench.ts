import './define.js';

const itemRenderer = () => {
  const avatar = document.createElement('iqv-avatar');
  return avatar;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
