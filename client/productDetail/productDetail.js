// 찜 클릭시 하트 변경
let toggle = false;
function toggleLike() {
  document.getElementById('like').src = toggle ? '../assets/icons/icon/redHeart.svg' : '../assets/icons/icon/Heart.svg';
  toggle = !toggle;
}

// navbar 선택 is-active 클래스 탈부착
const items = document.querySelectorAll('.list');
items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(e => {
      e.classList.remove('is-active');
    });
    item.classList.add('is-active');
  });
});

// navbar sticky 안먹혀서 fixed로 만들어주기
const navbar = document.getElementsByClassName('fixed-navbar')[0];
window.addEventListener('scroll', function () {
  if (window.scrollY < 1296) {
    navbar.style.position = 'sticky';
  }
  if (window.scrollY >= 1296) {
    navbar.style.position = 'fixed';
  }
});

// 장바구니 클릭 시 상단에 버블 4초 띄우기
const notification = document.getElementsByClassName('bubble-wrapper')[0];
const cart = document.getElementsByClassName('product-buttons__cart')[0];
cart.addEventListener('click', function () {
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 4000);
});

// 상품 갯수 추가 시 총 가격 변화
function count(type) {
  const amount = document.getElementById('amount');
  const price = document.getElementById('total-price');
  const target = document.getElementById('minus');

  let number = amount.innerText;
  let totalPrice = price.innerText;

  if (type === 'plus') {
    target.disabled = false;
    number = parseInt(number) + 1;
    totalPrice = parseInt(number * 4980)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  if (type === 'minus') {
    target.disabled = false;
    number = parseInt(number) - 1;
    totalPrice = parseInt(number * 4980)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  if (number <= 1) {
    target.disabled = true;
  }

  amount.innerText = number;
  price.innerText = totalPrice;
}

// 후기 작성하기 클릭하면 창 띄우기
const modal = document.querySelector('.review-modal');
const btnOpenPopup = document.querySelector('.review-button');

btnOpenPopup.addEventListener('click', () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.background = 'rgba(0, 0, 0, 0.5)';
});

// 취소 버튼 클릭하면 창 닫기
const btnClosePopup = document.querySelector('.review__write__buttons__cancel');
const btnClose = document.querySelector('.closeBtn');

btnClosePopup.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'unset';
  document.body.style.background = '';
});

btnClose.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'unset';
  document.body.style.background = '';
});
