const getComments = async (id) => {
  const container = document.querySelector('.comment-text');
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eOZkXPtr7Ef1fC9cKT4p/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  container.innerHTML = '';
  data.forEach((el) => {
    container.innerHTML += `<p> ${el.creation_date}  ${el.username}  ${el.comment}</p>`;
  });
};

export default getComments;
