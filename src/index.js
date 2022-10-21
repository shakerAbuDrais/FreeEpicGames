import './style.css';
import modal from './modules/displayGameComments.js';
import Comments from './modules/comments.js';
import newComment from './modules/commentsApi.js';
import displayComment from './modules/getComments.js';
import options from './modules/freegames.js';
import likeSend from './modules/sendlikes.js';

window.addEventListener('load', () => {
  options();
  window.addEventListener('click', (e) => {
    const games = JSON.parse(localStorage.getItem('allGames'));
    if (e.target.textContent === 'Comments' && e.target.className !== 'fa fa-heart') {
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
    } else if (e.target.textContent !== 'Comments' && e.target.className === 'fa fa-heart') {
      const { id } = e.target.parentNode;
      likeSend(id);
    }
  });
});
