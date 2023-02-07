import {getNode, getNodes} from '../dom/getNode.js';

const checkAllButton = getNode('#terms-check-all');
const checkboxes = getNodes('input[name="terms"]');

export function checkAll() {
  const checkboxes = getNodes('input[name="terms"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = checkAllButton.checked;
  });
}

export function compareCheck() {
  const checkboxes = getNodes('input[name="terms"]');
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
