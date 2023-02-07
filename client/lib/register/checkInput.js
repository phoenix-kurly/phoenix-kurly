import {getNode} from '../dom/getNode.js';

export function checkInput(node) {
  if (node.type === String) node = getNode(node);
  if (node.value !== '') {
    if (/[^0-9]/g.test(node.target.value)) {
      node.target.value = node.target.value.replace(/[^0-9]/g, '');
      console.log('숫자만 입력해주세요.');
    }
  }
}
