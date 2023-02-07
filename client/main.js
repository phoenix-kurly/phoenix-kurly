import {getNode, matchPw, checkEmail, checkLength, checkInput, makeCertificateNum, makeUniqueId, getNodes, checkAll, compareCheck} from './lib/index.js';

const confirmPassword = getNode('#password-confirm');
const email = getNode('#email');
const password = getNode('.register #password');
const phone = getNode('#phone');
const births = getNodes('input[class *= "register-birth"]');
const phoneButton = getNode('#phone-certificate');
const registerSubmit = getNode('.register__submit-button');
const checkAllButton = getNode('#terms-check-all');
const checkboxes = getNodes('input[name="terms"]');

confirmPassword.addEventListener('input', matchPw);
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkLength);
phone.addEventListener('input', checkInput);
births.forEach(birth => {
  birth.addEventListener('input', checkInput);
});
phoneButton.addEventListener('click', makeCertificateNum);
registerSubmit.addEventListener('click', makeUniqueId);
checkAllButton.addEventListener('click', checkAll);
checkboxes.forEach(check => {
  check.addEventListener('click', compareCheck);
});
