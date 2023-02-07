// import { addClass, removeClass } from '../client/lib/dom/css.js';
// import { getNode } from '../client/lib/dom/getNode.js';

const body = document.getElementsByTagName('body')[0];
const cartButton = document.querySelectorAll(".today-product-list__button-wrapper");
const addCartModal = document.querySelector('.add-cart-container');
const cancelButton = document.querySelector('.add-cart__cancel');
const minusButton = document.querySelector('.add-cart__minus-button');
const plusButton = document.querySelector('.add-cart__plus-button');

const number = document.querySelector('.add-cart__number');

function openModal(){
  let scrollY = window.scrollY;

  addCartModal.style.top = `${scrollY}px`;
  // addCartModal.style.position = `fixed`;
  body.classList.add('scrollLock');

  addCartModal.classList.remove('hidden');
}

function closeModal(){
  addCartModal.classList.add('hidden');
  body.classList.remove('scrollLock')
}

function plusHandler(){
  let sum = +number.innerText;
  number.innerHTML = `${++sum}`;
}

function minusHandler(){
  let sum = +number.innerText;
  number.innerHTML = `${--sum}`;
}

Array.from(cartButton).forEach((item)=> {
  item.addEventListener('click', openModal)}
  );
  
  cancelButton.addEventListener('click',closeModal);

minusButton.addEventListener('click',minusHandler);
plusButton.addEventListener('click',plusHandler);
