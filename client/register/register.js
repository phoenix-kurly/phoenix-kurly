import {getNode, matchPw, checkEmail, checkLength, checkInput, makeCertificateNum, getNodes, checkAll, compareCheck, createUser} from '../lib/index.js';

const confirmPassword = getNode('.register #password-confirm');
const email = getNode('.register #email');
const password = getNode('.register #password');
const phone = getNode('.register #phone');
const births = getNodes('.register input[class *= "register-birth"]');
const phoneButton = getNode('.register #phone-certificate');
const registerSubmit = getNode('.register .register__submit-button');
const checkAllButton = getNode('.register #check-all-terms');
const checkboxes = getNodes('.register input[class *="terms"]');
const register = getNode('.register #register-form');

registerSubmit.addEventListener('click', createUser);
confirmPassword.addEventListener('input', matchPw);
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkLength);
phone.addEventListener('input', checkInput);
births.forEach(birth => {
  birth.addEventListener('input', checkInput);
});
phoneButton.addEventListener('click', makeCertificateNum);
checkAllButton.addEventListener('click', checkAll);
checkboxes.forEach(check => {
  check.addEventListener('click', compareCheck);
});
