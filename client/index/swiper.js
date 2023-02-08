const swiper = new Swiper('.swiper-container',{
  autoplay:true,
  loop:true,
  speed: 1000,
  parallax:true,
  pagination:{
    el: '.pagination',
    clickable: true, 
    type: 'fraction'
  },
  // 동적로딩
  lazy:{
    loadPrevNext: true //이전, 다음 이미지 미리 로딩
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  
});

const swiper2 = new Swiper('.today-product-swiper-container',{
  autoplay: false,
  loop: false,
  lazy:{
    loadPrevNext:true
  },
  navigation: {
    nextEl: '.today-product-next',
    prevEl: '.today-product-prev'
  },
  on: {
    activeIndexChange: function(swiper2){
      const prevBtn = document.querySelector('.today-product-prev');
      const nextBtn = document.querySelector('.today-product-next');
      
      if(this.realIndex==0){
        prevBtn.classList.add('hidden');
      }else{
        prevBtn.classList.remove('hidden');
      }

      if(this.realIndex >= swiper2.slides.length-1){
        nextBtn.classList.add('hidden');
      }else{
        nextBtn.classList.remove('hidden');
      }

    }
  }
});


const swiper3 = new Swiper('.product-swiper-container',{
  autoplay: false,
  loop: false,
  lazy:{
    loadPrevNext:true
  },
  navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev'
  },
  on: {
    activeIndexChange: function(swiper3){
      const prevBtn = document.querySelector('.product-button-prev');
      const nextBtn = document.querySelector('.product-button-next');

      if(this.realIndex==0){
        prevBtn.classList.add('hidden');
      }else{
        prevBtn.classList.remove('hidden');
      }

      if(this.realIndex >= swiper3.slides.length-1){
        nextBtn.classList.add('hidden');
      }else{
        nextBtn.classList.remove('hidden');
      }

    }
  }
});


