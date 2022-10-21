const getLike = async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ngPmi6EPTDMdfkgNT9zd/likes', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const countLike = document.querySelector(`#${id}`);
  const data = await response.json();
  countLike.innerHTML = '';
  data.forEach((el) => {
    if (id === el.item_id) {
      countLike.innerHTML += `${el.likes} likes`;
    }
  });
};

export default getLike;