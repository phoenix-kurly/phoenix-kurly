
const swiper = new Swiper('.swiper-container',{
  autoplay:true,
  loop:true,
  speed: 1000,
  parallax:true,

  // 동적로딩
  lazy:{
    loadPrevNext: true //이전, 다음 이미지 미리 로딩
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  
}) 
