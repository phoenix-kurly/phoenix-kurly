import '../index/swiper.js';
import '../index/modal.js';

// import { addClass, getNode, removeClass } from '../client/lib';

// const divBannerSlide = document.querySelectorAll('.main-banner-slide');
const divParent = document.querySelector('.today-product-slide');

// async function getBanners(){
//   try{
//     let response = await fetch('http://localhost:3000/banners');
//     let data = await response.json();

//     let banners = data.banners;

//     for(let i=0;i<4;i++){
//       divBannerSlide[i].innerHTML = `
//         <img src="${banners[i].image}" alt="${banners[i].alt}" width="1920" />
//       `;
//     }

//   }
//   catch(err){
//     console.log(err);
//   }
// }

async function getProducts(){
  try{
    let response = await fetch('http://localhost:3000/data');
    let data = await response.json();
    let products = data.products;
    
    for(let i=0;i<2;i++){
      const div = document.createElement("div");
      div.classList.add('swiper-slide');
      div.classList.add('today-product-list');
      div.innerHTML = `
        <li>
          <div class="today-product-list__img-container">
            <img src="${products[0].image}" alt="탱탱쫄면" />
            <div class="today-product-list__button-wrapper">
              <button><span>장바구니</span></button>
            </div>
          </div>
          <div class="today-product-list__text">
            <p class="today-product-list__name">${products[0].name}</p>
            <p class="today-product-list__price">${products[0].price} 원</p>
          </div>
        </li>
        <li>
          <div class="today-product-list__img-container">
            <img src="${products[1].image}" alt="온더바디 선쿠션" />
            <div class="today-product-list__button-wrapper">
              <button><span>장바구니</span></button>
            </div>
          </div>
          <div class="today-product-list__text">
            <p class="today-product-list__name">${products[1].name}</p>
            <p class="today-product-list__price">${products[1].price} 원</p>
          </div>
        </li>
        <li>
          <div class="today-product-list__img-container">
            <img src="${products[2].image}" alt="유기농 밀키퀸 현미" />
            <div class="today-product-list__button-wrapper">
              <button><span>장바구니</span></button>
            </div>
          </div>
          <div class="today-product-list__text">
            <p class="today-product-list__name">${products[2].name}</p>
            <p class="today-product-list__price">${products[2].price} 원</p>
          </div>
        </li>
        <li>
          <div class="today-product-list__img-container">
            <img src="${products[3].image}" alt="[프로쉬] 베이비 세탁세" />
            <div class="today-product-list__button-wrapper">
              <button><span>장바구니</span></button>
            </div>
          </div>
          <div class="today-product-list__text">
            <p class="today-product-list__name">${products[3].name}</p>
            <p class="today-product-list__price">
              <span>${+products[3].saleRatio * 100}%</span>
              ${products[3].salePrice} 원
            </p>
            <span class="today-product-list__origin-price">${products[3].price} 원</span>
          </div>
        </li>
      `;

      divParent.insertAdjacentElement('beforeend', div);
    }

  }
  catch(err){
    console.log(err);
  }

}

getProducts();









// addProductList(getProducts());


// function getProducts(){
//   return fetch('http://localhost:3000/data')
//     .then((res)=> res.json())
//     console.log(Response);
// }

// getProducts().then((items) => {
//   console.log(items);
// })

