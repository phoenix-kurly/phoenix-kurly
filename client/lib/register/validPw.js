import {getNode} from '../dom/getNode.js';

const password = getNode('#password');
const confirmPassword = getNode('#password-confirm');

export function matchPw() {
  if (password.value === '') {
    //텍스트를 화면에 보이게 하기
    console.log('비밀번호를 먼저 입력해주세요.');
    confirmPassword.value = '';
    return;
  }
  if (password.value !== confirmPassword.value) {
    console.log('비밀번호가 일치하지 않습니다.');
  } else {
    console.log('비밀번호가 일치합니다.');
  }
  return;
}

export function checkLength() {
  if (password.value.length < 8) {
    console.log('비밀번호는 8자리 이상이어야 합니다.');
  }
  return;
}
