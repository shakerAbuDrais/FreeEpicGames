import getComments from './getComments.js';

const newComment = async (username, comment, id) => {
  const data = {
    item_id: id,
    username,
    comment,
  };
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eOZkXPtr7Ef1fC9cKT4p/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  getComments(id);
};

export default newComment;