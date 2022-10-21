const getComments = async (id) => {
  const container = document.querySelector('.comment-text');
  const comCounter = document.querySelector('.com-counter');
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ngPmi6EPTDMdfkgNT9zd/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  const commentsCounter = data.length;
  container.innerHTML = '';
  data.forEach((el) => {
    container.innerHTML += `<p> ${el.creation_date}  ${el.username}  ${el.comment}</p>`;
  });
  comCounter.innerHTML = `<p> Comments(${commentsCounter}) </p>`;
};

export default getComments;
