import itemCounter from './itemcounter.js';

const likeSend = async (id) => {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ntt9tCZkqdoaDg3jriZb/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
};
const getLike = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ntt9tCZkqdoaDg3jriZb/likes', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const countLike = document.querySelector('#countlike');
  const data = response.json();
  countLike.innerHTML = '';
  data.forEach((el) => {
    countLike.innerHTML += `${el.item_id} likes`;
  });
};

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
      <p id="countlike">Likes</p>
      </div>
    </div>
  </div>`;
  });
  const itemNav = document.querySelector('.itemNav');
  itemNav.innerHTML = `(${array.length})`;
  itemCounter(array);
  localStorage.setItem('allGames', JSON.stringify(array));
};

const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach((button) => {
  button.addEventListener('click', async (e) => {
    const { id } = e.target;
    await likeSend(id);
    getLike();
  });
});
export default display;