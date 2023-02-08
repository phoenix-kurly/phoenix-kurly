const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

const category = document.getElementById("category");
const list = document.getElementById("list");
const dcAds = document.getElementById("dcAds");
const closeBtn = document.getElementById("closeBtn");
// const colorSwitch = document.querySelector(".page-switch");

// hidden class 
const member = document.querySelector(".header__inner-member");
const toggle = document.querySelector(".page-switch");
const delivery = document.querySelector(".nav__categhory__delivery");

// sticky class
const innerTop = document.querySelector(".header-inner__top");
const searchForm = document.querySelector(".search-form");
const search = document.querySelector("#search");
const memberPage = document.querySelector(".member-page");
const categoryMenu = document.querySelector(".nav__categhory__menu");

window.onscroll = function(){
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight){
    bigHeader();
  } else {
    smallHeader();
  }
}

function bigHeader(){
  member.classList.add('hidden');
  toggle.classList.add('hidden');
  delivery.classList.add('hidden');
  innerTop.classList.add('sticky');
  searchForm.classList.add('sticky');
  search.classList.add('sticky');
  memberPage.classList.add('sticky');
  categoryMenu.classList.add('sticky');
}

function smallHeader(){
  member.classList.remove('hidden');
  toggle.classList.remove('hidden');
  delivery.classList.remove('hidden');
  innerTop.classList.remove('sticky');
  searchForm.classList.remove('sticky');
  search.classList.remove('sticky');
  memberPage.classList.remove('sticky');
  categoryMenu.classList.remove('sticky');
}

function openListHandler(){
  list.classList.remove('hidden');
}

function closeListHandler(){
  list.classList.add('hidden');
}

function closeBannerHandler(){
  dcAds.classList.add('hidden');
}

// function colorChangeHandler(event){
  //   let pageSwitch = event.target;
  //   pageSwitch.classList.add("primary-color");
  // }

category.addEventListener('mouseenter', openListHandler);
list.addEventListener('mouseleave', closeListHandler);

closeBtn.addEventListener('click', closeBannerHandler);

// colorSwitch.addEventListener('click', colorChangeHandler)


  