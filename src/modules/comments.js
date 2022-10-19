export default class Comments {
  constructor(author, comment, date, id) {
    this.comment = comment;
    this.author = author;
    this.date = date;
    this.id = id;
  }

  static addComment = ((author, comment, date, id) => {
    const allComments = new Comments(author, comment, date, id);
    return allComments;
  });
}
