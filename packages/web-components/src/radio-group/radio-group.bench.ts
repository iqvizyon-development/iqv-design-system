import '../radio/define.js';
import './define.js';

const itemRenderer = () => {
  const radioGroup = document.createElement('iqv-radio-group');
  const radio = document.createElement('iqv-radio');
  const radio2 = document.createElement('iqv-radio');
  const radio3 = document.createElement('iqv-radio');
  radio.appendChild(document.createTextNode('Radio 1'));
  radio2.appendChild(document.createTextNode('Radio 2'));
  radio3.appendChild(document.createTextNode('Radio 3'));

  radioGroup.appendChild(radio);
  radioGroup.appendChild(radio2);
  radioGroup.appendChild(radio3);

  return radioGroup;
};

export default itemRenderer;
export { tests } from '../utils/benchmark-wrapper.js';
