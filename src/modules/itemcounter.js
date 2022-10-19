const itemCounter = () => {
  const box = document.querySelectorAll('.box');
  const itemNav = document.querySelector('.itemNav');
  itemNav.innerHTML = box.length;
};

export default itemCounter;