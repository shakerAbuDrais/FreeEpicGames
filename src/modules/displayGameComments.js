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
        <div class = "comment-text"></div>
        <form>
            <h3> Add your comment </h3>
            <label for="name"></label><br>
            <input type="text" id="name" name="name" value=""><br>
            <label for="comment"></label><br>
            <textarea id="comment" name="comment"></textarea><br><br>
            <input id = "submit" class = "${game.id}" type="submit" value="Submit">
        </form>
        </div>`;
    }
  });
};
export default modal;