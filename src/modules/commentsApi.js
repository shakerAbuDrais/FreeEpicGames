const newComment = async (username, comment, id) => {
  const data = {
    item_id: id,
    username,
    comment,
  };
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ngPmi6EPTDMdfkgNT9zd/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
};

export default newComment;