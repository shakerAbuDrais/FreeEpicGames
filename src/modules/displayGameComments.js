const popup = document.querySelector('.popup');
const modal = (id) => {
  const games = JSON.parse(localStorage.getItem('allGames'));
  games.forEach((game) => {
    if (id === game.id) {
      popup.innerHTML = `<div class = "new-pop">
      <img src="${game.keyImages[0].url}" alt="" width = "50%" height = "200px">
      <span id = "close">&#10008;</span>
      <h2>${game.title}</h2>
        <p>${game.description}</p>
        <h3 class = "com-counter"> </h3>
        <div class = "comment-text">
        </div>
        <h3> Add your comment </h3>
        <form>
            <label for="name"></label><br>
            <input type="text" id="name" name="name" value="" placeholder = " Your Name"><br>
            <label for="comment"></label><br>
            <textarea id="comment" name="comment" placeholder = " Your insights"></textarea><br><br>
            <input id = "submit" class = "${game.id}" type="submit" value="Submit">
        </form>
        </div>`;
    }
  });
};
export default modal;