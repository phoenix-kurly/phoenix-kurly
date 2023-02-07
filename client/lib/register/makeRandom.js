export function makeUniqueId() {
  const characters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let key = '';
  for (let i = 0; i < 12; i++) {
    key += characters[Math.floor(Math.random() * characters.length)];
  }
  if (true) {
    //저장소에 겹치는 키가 있는 지 확인 후 있으면 키 다시 생성하는 코드 작성
  }
  console.log(key);
  return key;
}

export function makeCertificateNum() {
  const num = Math.floor(Math.random() * 10000);
  alert(num);
}
