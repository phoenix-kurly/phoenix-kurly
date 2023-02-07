import {getNode} from '../dom/getNode.js';

const email = getNode('#email');

export function checkEmail() {
  const emailValidation = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  if (email !== '') {
    if (!emailValidation.test(email.value)) {
      console.log('유효하지 않은 이메일 형식입니다.');
    } else {
      console.log('유효한 이메일 형식입니다.');
    }
  }
  return;
}
