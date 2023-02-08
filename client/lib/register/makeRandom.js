import {user} from '../utils/user.js';
import {userMemo} from '../utils/memo.js';

export function makeUniqueId() {
  setUserMemo();
  const characters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let key = '';
  for (let i = 0; i < 12; i++) {
    key += characters[Math.floor(Math.random() * characters.length)];
  }
  console.log(key);
  if (userMemo(key, () => key) === false) {
    makeUniqueId();
    return;
  }
  return key;
}

export function makeCertificateNum() {
  const num = Math.floor(Math.random() * 10000);
  alert(num);
}

async function setUserMemo() {
  try {
    let response = await user.get('http://localhost:3000/users');
    let datas = response.data;
    datas.forEach(data => {
      if (data.uniqueId) {
        userMemo(data.uniqueId, () => data.uniqueId);
      }
    });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}
