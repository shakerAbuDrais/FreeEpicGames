import likeSend from './sendlikes.js';
import getLike from './getLikes.js';
import itemCounter from '../test/itemcounter.js';

const display = (array) => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  array.forEach((item) => {
    main.innerHTML += `<div class="box">
    <img class='image' src="${item.keyImages[0].url}" alt="">
    <h3 class="title">${item.title}</h3>
    <div class="comment-like">
      <button class="comment-button ${item.id}" >Comments</button>
      <div class="like-div">
      <button class="like-button" id='${item.id}'>
      <i class="fa fa-heart"></i>
      </button>
      <p id="countlike"></p>
      </div>
    <div>
      <button class="comment-button ${item.id}" id ="com-id" >Comments</button>
    </div>
  </div>`;
    getLike(item.id);
  });
  const itemNav = document.querySelector('.itemNav');
  itemNav.innerHTML = `(${array.length})`;
  itemCounter(array);
  localStorage.setItem('allGames', JSON.stringify(array));
};

export { display, likeSend };