const cartButton = document.querySelectorAll(".today-product-list__button-wrapper");
const li = document.querySelectorAll('.recent-product__list li');

let imgTag = [];

function saveProductInfo(e){
  e.preventDefault();

  const imgNode = e.target.parentNode.parentNode.firstChild;
  // console.log(imgNode.outerHTML);

  if(savedTag){
    const parsedTag = savedTag;
    console.log('최근 본 상품 공간이 없습니다.');
    // if(parsedTag.includes(imgNode.outerHTML))
    //   console.log('이미 담은 상품입니다.');
    // else{
      // imgTag.push(imgNode.outerHTML);
      // localStorage.setItem("tag",imgTag);
    // }
  } 
  else{
    imgTag.push(imgNode.outerHTML);
    localStorage.setItem("tag",imgTag);
  }

  showRecentProduct();
}

function showRecentProduct(){

  const a = document.createElement('a');
  const result = localStorage.getItem("tag");

  a.innerHTML = `${result}`;
  
  li[2].appendChild(a);
}


const savedTag = localStorage.getItem("tag");

Array.from(cartButton).forEach((item)=> {
  item.addEventListener('click', saveProductInfo)
});
