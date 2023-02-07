const category = document.getElementById("category");
const list = document.getElementById("list");
const dcAds = document.getElementById("dcAds");
const closeBtn = document.getElementById("closeBtn");
// const colorSwitch = document.querySelector(".page-switch");

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