// import { addClass, removeClass } from '../client/lib/dom/css.js';
// import { getNode } from '../client/lib/dom/getNode.js';

const body = document.getElementsByTagName('body')[0];

const mainModal = document.querySelector('.main-popup');
const addCartModal = document.querySelector('.add-cart-container');
const cartButton = document.querySelectorAll(".today-product-list__button-wrapper");

const mainCloseToday = document.querySelector('.main-popup__close-today');
const mainClose = document.querySelector('.main-popup__close');

const cancelButton = document.querySelector('.add-cart__cancel');
const minusButton = document.querySelector('.add-cart__minus-button');
const plusButton = document.querySelector('.add-cart__plus-button');

const number = document.querySelector('.add-cart__number');
const totalPrice = document.querySelector('.add-cart__price');


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
  number.innerHTML = '1';
  totalPrice.innerHTML = '4980';
  minusButton.classList.remove('is-active-minus');
}

function plusHandler(){
  let sum = +number.innerHTML;
  let price = 4980; 

  if(sum===1){
    minusButton.classList.add('is-active-minus');
  }

  number.innerHTML = `${++sum}`;
  let result = (price*sum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  totalPrice.innerHTML = `${result}`;
}

function minusHandler(){
  let sum = +number.innerHTML;
  let price = 4980;
  
  if(sum>1){
    number.innerHTML = `${--sum}`;
    let result = (price*sum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    totalPrice.innerHTML = `${result}`;
  }
  if(sum===1){
    minusButton.classList.remove('is-active-minus');
  }
}

Array.from(cartButton).forEach((item)=> {
  item.addEventListener('click', openModal)
});
  
cancelButton.addEventListener('click',closeModal);
minusButton.addEventListener('click',minusHandler);
plusButton.addEventListener('click',plusHandler);
mainClose.addEventListener('click',()=>{mainModal.classList.add('hidden')});
mainCloseToday.addEventListener('click',()=>{mainModal.classList.add('hidden')});
