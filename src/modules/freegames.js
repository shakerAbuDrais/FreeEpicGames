import { display } from './display.js';

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

export default options;