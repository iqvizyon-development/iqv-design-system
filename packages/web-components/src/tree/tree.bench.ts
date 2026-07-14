import './define.js';

const itemRenderer = () => {
  const tree = document.createElement('iqv-tree');
  return tree;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
