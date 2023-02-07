import {getNode} from '../dom/getNode.js';

const password = getNode('#password');
const confirmPassword = getNode('#password-confirm');

export function matchPw() {
  if (password.value === '') {
    getNode('.no-password').style.display = 'block';
    confirmPassword.value = '';
    return;
  }
  if (password.value !== confirmPassword.value) {
    getNode('.no-password').style.display = 'none';
    getNode('.same-pw').style.display = 'none';
    getNode('.unsame-pw').style.display = 'block';
  } else {
    getNode('.no-password').style.display = 'none';
    getNode('.unsame-pw').style.display = 'none';
    getNode('.same-pw').style.display = 'block';
  }
  return;
}

export function checkLength() {
  if (password.value.length < 8) {
    getNode('.password-desc').style.display = 'block';
    getNode('.no-password').style.display = 'none';
    getNode('.unsame-pw').style.display = 'none';
    getNode('.same-pw').style.display = 'none';
    confirmPassword.value = '';
  } else {
    getNode('.password-desc').style.display = 'none';
  }
  return;
}
