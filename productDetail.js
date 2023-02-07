let toggle = false;
function toggleLike() {
  document.getElementById('like').src = toggle ? './client/assets/icons/icon/redHeart.svg' : './client/assets/icons/icon/Heart.svg';
  toggle = !toggle;
}
