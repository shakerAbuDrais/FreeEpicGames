import './style.css';
import modal from './modules/displayGameComments.js';
import Comments from './modules/comments.js';
import newComment from './modules/commentsApi.js';
import displayComment from './modules/getComments.js';

const display = (array) => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  array.forEach((item) => {
    main.innerHTML += `<div class="box">
    <img class='image' src="${item.keyImages[0].url}" alt="">
    <h3 class="title">${item.title}</h3>
    <div>
      <button class="comment-button ${item.id}" >Comments</button>
      <button class="reservation-button ${item.id}" >reservations</button>
    </div>
  </div>`;
  });
  localStorage.setItem('allGames', JSON.stringify(array));
};

const options = async () => {
  const response = await fetch('https://free-epic-games.p.rapidapi.com/free', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '42398f1d19msh93087ecbad4588bp1bf92ejsnd0ca092a3aa3',
      'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com',
    },
  });
  const results = response.json();
  results.then((object) => display(object.freeGames.current));
};

window.addEventListener('load', () => {
  options();
  window.addEventListener('click', (e) => {
    const games = JSON.parse(localStorage.getItem('allGames'));
    const id = e.target.className.split(' ')[1];
    games.forEach((game) => {
      if (id === game.id) {
        modal(id);
      }
    });
    const closeBtn = document.querySelector('#close');
    const newPop = document.querySelector('.new-pop');
    closeBtn.addEventListener('click', () => {
      newPop.style.display = 'none';
    });

    const submit = document.querySelector('#submit');
    submit.addEventListener('click', (e) => {
      e.preventDefault();
      const newId = e.target.className;
      const name = document.querySelector('#name');
      const comment = document.querySelector('#comment');
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const currentDate = ` ${month}/ ${day}/ ${year}`;
      Comments.addComment(name.value, comment.value, newId, currentDate);
      newComment(name.value, comment.value, newId);
      displayComment(newId);
    });
  });
});
