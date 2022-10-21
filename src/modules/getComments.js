const displayComment = (newId) => {
  const container = document.querySelector('.comment-text');
  const getComments = async () => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ngPmi6EPTDMdfkgNT9zd/comments?item_id=${newId}`, {
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
  getComments();
};

export default displayComment;
