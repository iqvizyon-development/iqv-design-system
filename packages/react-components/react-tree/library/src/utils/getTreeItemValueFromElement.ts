import type { TreeItemValue } from '../TreeItem';

export const dataTreeItemValueAttrName = 'data-iui-tree-item-value';

export const getTreeItemValueFromElement = (element: HTMLElement): TreeItemValue | null => {
  return element.getAttribute(dataTreeItemValueAttrName) as TreeItemValue | null;
};
