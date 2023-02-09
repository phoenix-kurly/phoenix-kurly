import {getNode} from '../dom/getNode.js';
import {user} from '../utils/user.js';
import {checkEmail} from './checkEmail.js';
import {makeUniqueId} from './makeRandom.js';
import {matchPw, checkLength} from './validPw.js';

const register = getNode('#register-form');

export async function createUser() {
  let form = register;
  try {
    let formField = new FormData(form);
    let formData = Object.fromEntries(formField.entries());
    if (checkEmail() === false) {
      alert('이메일을 확인해주세요.');
    } else if (matchPw() === false || checkLength() === false) {
      alert('비밀번호를 확인해주세요.');
    } else {
      let response = await user.post('http://localhost:3000/users', {formData, uniqueId: makeUniqueId()});
      if (response) {
        alert('회원가입이 완료되었습니다!');
        location.href = '../../../index/index.html';
      }
    }
  } catch (error) {
    console.log(error);
    alert('회원가입에 실패했습니다.');
    location.reload(true);
  }
}

export async function createUser() {
  let form = register;
  try {
    let formField = new FormData(form);
    let formData = Object.fromEntries(formField.entries());
    if (checkEmail() === false) {
      alert('이메일을 확인해주세요.');
    } else if (matchPw() === false || checkLength() === false) {
      alert('비밀번호를 확인해주세요.');
    } else {
      let response = await user.post('http://localhost:3000/users', {formData, uniqueId: makeUniqueId()});
      if (response) {
        alert('회원가입이 완료되었습니다!');
        location.href = '../../../index/index.html';
      }
    }
  } catch (error) {
    console.log(error);
    alert('회원가입에 실패했습니다.');
    location.reload(true);
  }
}