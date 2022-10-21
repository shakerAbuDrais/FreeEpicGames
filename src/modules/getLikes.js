const getLike = async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ngPmi6EPTDMdfkgNT9zd/likes', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  data.forEach((el) => {
    if (id === el.item_id) {
      const countLike = document.querySelector(`#${el.item_id}`);
      countLike.innerHTML = '<i class="fa fa-heart"></i> ';
      countLike.innerHTML += `${el.likes} likes`;
    }
  });
};

export default getLike;