import '../menu-button/define.js';
import '../menu-item/define.js';
import '../menu-list/define.js';
import './define.js';

const itemRenderer = () => {
  const menu = document.createElement('iqv-menu');
  const menuButton = document.createElement('iqv-menu-button');
  const menuList = document.createElement('iqv-menu-list');
  const menuItem = document.createElement('iqv-menu-item');
  const menuItem2 = document.createElement('iqv-menu-item');
  const menuItem3 = document.createElement('iqv-menu-item');

  menuButton.setAttribute('slot', 'trigger');
  menuButton.appendChild(document.createTextNode('Menu button'));
  menuItem.appendChild(document.createTextNode('Menu item 1'));
  menuItem2.appendChild(document.createTextNode('Menu item 2'));
  menuItem3.appendChild(document.createTextNode('Menu item 3'));

  menuList.appendChild(menuItem);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);

  menu.appendChild(menuList);
  menu.appendChild(menuButton);

  return menu;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
