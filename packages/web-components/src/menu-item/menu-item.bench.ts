import './define.js';

const itemRenderer = () => {
  const menuItem = document.createElement('iqv-menu-item');
  menuItem.appendChild(document.createTextNode('Menu item'));
  return menuItem;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
