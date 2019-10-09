const connection = require('../db/db-connection');

const CommentModel = () => {};

CommentModel.reportComments = (reportid, callback) => {
  connection.query(
    'SELECT * FROM comments WHERE reportid = ?',
    reportid,
    callback
  );
};

CommentModel.insert = (newComment, callback) => {
  connection.query('INSERT INTO comments SET ?', newComment, callback);
};

module.exports = CommentModel;
