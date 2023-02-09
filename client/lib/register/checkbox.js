import {getNode, getNodes} from '../dom/getNode.js';

const checkAllButton = getNode('#check-all-terms');
const checkboxes = getNodes('input[class *="terms"]');

export function checkAll() {
  checkboxes.forEach(checkbox => {
    checkbox.checked = checkAllButton.checked;
  });
}

export function compareCheck() {
  const checkboxLength = checkboxes.length;
  let count = 0;
  checkboxes.forEach(check => {
    if (check.checked === true) {
      count++;
    }
  });
  if (count === checkboxLength) {
    checkAllButton.checked = true;
  } else {
    checkAllButton.checked = false;
  }
}
