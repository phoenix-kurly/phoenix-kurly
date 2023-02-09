import {getNode} from '../dom/getNode.js';

const email = getNode('#email');

export function checkEmail() {
  const regExp = /[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-z]/;
  if (email !== '') {
    if (!regExp.test(email.value)) {
      getNode('.valid-email').style.display = 'none';
      getNode('.no-valid-email').style.display = 'block';
      return false;
    } else {
      getNode('.no-valid-email').style.display = 'none';
      getNode('.valid-email').style.display = 'block';
      return true;
    }
  } else {
    return false;
  }
}
