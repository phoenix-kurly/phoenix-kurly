const category = document.getElementById("category");
const list = document.getElementById("list");

function openListHandler(){
  list.classList.remove('hidden');
}

function closeListHandler(){
  list.classList.add('hidden');
}

category.addEventListener('mouseenter', openListHandler);
list.addEventListener('mouseleave', closeListHandler);