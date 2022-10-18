import './style.css';

const display = (array) => {
  const main = document.querySelector(".main");
  main.innerHTML = "";
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
};

const options = async () => {
  const response = await fetch("https://free-epic-games.p.rapidapi.com/free", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "42398f1d19msh93087ecbad4588bp1bf92ejsnd0ca092a3aa3",
      "X-RapidAPI-Host": "free-epic-games.p.rapidapi.com",
    },
  });
  const results = response.json();
  results.then((object) => display(object.freeGames.current));
};

window.addEventListener("load", () => {
  options();
});