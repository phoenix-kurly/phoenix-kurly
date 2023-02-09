import '../index/swiper.js';
import '../index/modal.js';
import '../index/recentProduct.js';

// const divBannerSlide = document.querySelectorAll('.main-banner-slide');
const imgContainer = document.querySelectorAll('.today-product-list__img-container');
const productsText = document.querySelectorAll('.today-product-list__text');

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

    for(let i=0;i<products.length;i++){
      const tmp = `<img src = "${products[i].image}" alt = "" />`;
      imgContainer[i].insertAdjacentHTML('afterbegin',tmp);
      productsText[i].insertAdjacentHTML('beforeend',`<p class="today-product-list__name">${products[i].name}</p>`);
      if(i===3){
        productsText[i].insertAdjacentHTML('beforeend',`<p class="today-product-list__price">
                                                          <span>${+products[i].saleRatio * 100}%</span>
                                                          ${products[i].salePrice} 원
                                                        </p>`);
        productsText[i].insertAdjacentHTML('beforeend',`<span class="today-product-list__origin-price">${products[i].price} 원</span>`)
        
        continue;
      }
      productsText[i].insertAdjacentHTML('beforeend',`<p class="today-product-list__price">${products[i].price} 원</p>`);
    }
    
    for(let i=0;i<products.length;i++){
      const tmp = `<img src = "${products[i].image}" alt = "" />`;
      imgContainer[i+4].insertAdjacentHTML('afterbegin',tmp)
      productsText[i+4].insertAdjacentHTML('beforeend',`<p class="today-product-list__name">${products[i].name}</p>`);
      if(i===3){
        productsText[i+4].insertAdjacentHTML('beforeend',`<p class="today-product-list__price">
                                                            <span>${+products[i].saleRatio * 100}%</span>
                                                            ${products[i].salePrice} 원
                                                          </p>`);
        productsText[i+4].insertAdjacentHTML('beforeend',`<span class="today-product-list__origin-price">${products[i].price} 원</span>`)
        continue;
      }
      productsText[i+4].insertAdjacentHTML('beforeend',`<p class="today-product-list__price">${products[i].price} 원</p>`);  
    }

    for(let i=0;i<products.length;i++){
      const tmp = `<img src = "${products[i].image}" alt = "" />`;
      imgContainer[i+8].insertAdjacentHTML('afterbegin',tmp);
      productsText[i+8].insertAdjacentHTML('beforeend',`<p class="today-product-list__name">${products[i].name}</p>`);
      if(i===3){
        productsText[i+8].insertAdjacentHTML('beforeend',`<p class="today-product-list__price">
                                                          <span>${+products[i].saleRatio * 100}%</span>
                                                          ${products[i].salePrice} 원
                                                        </p>`);
        productsText[i+8].insertAdjacentHTML('beforeend',`<span class="today-product-list__origin-price">${products[i].price} 원</span>`)
        
        continue;
      }
      productsText[i+8].insertAdjacentHTML('beforeend',`<p class="today-product-list__price">${products[i].price} 원</p>`);
    }

    for(let i=0;i<products.length;i++){
      const tmp = `<img src = "${products[i].image}" alt = "" />`;
      imgContainer[i+12].insertAdjacentHTML('afterbegin',tmp);
      productsText[i+12].insertAdjacentHTML('beforeend',`<p class="today-product-list__name">${products[i].name}</p>`);
      if(i===3){
        productsText[i+12].insertAdjacentHTML('beforeend',`<p class="today-product-list__price">
                                                          <span>${+products[i].saleRatio * 100}%</span>
                                                          ${products[i].salePrice} 원
                                                        </p>`);
        productsText[i+12].insertAdjacentHTML('beforeend',`<span class="today-product-list__origin-price">${products[i].price} 원</span>`)
        
        continue;
      }
      productsText[i+12].insertAdjacentHTML('beforeend',`<p class="today-product-list__price">${products[i].price} 원</p>`);
    }
  }
  catch(err){
    console.log(err);
  }

}



// 실행함수 (json-server로부터 데이터(상품리스트) 가져와 웹 화면에 출력)
getProducts();
