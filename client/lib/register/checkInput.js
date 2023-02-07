import {getNode} from '../dom/getNode.js';

export function checkInput(node) {
  if (node.value !== '') {
    if (/[^0-9]/g.test(node.target.value)) {
      node.target.value = node.target.value.replace(/[^0-9]/g, '');
      if (node.target === getNode('input[id = "phone"]')) {
        getNode('.phone-desc').style.display = 'block';
      } else {
        getNode('.birth-desc').style.display = 'block';
      }
    } else {
      if (node.target === getNode('input[id = "phone"]')) {
        getNode('.phone-desc').style.display = 'none';
      } else {
        getNode('.birth-desc').style.display = 'none';
      }
    }
  }
}
