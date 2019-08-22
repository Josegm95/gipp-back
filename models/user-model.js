const connection = require('./db-connection');

const UserModel = () => {};

UserModel.getAll = callback => {
  connection.query('SELECT * FROM users', callback);
};

UserModel.getUser = (userId, callback) => {
  connection.query('SELECT * FROM users WHERE id = ?', userId, callback);
}

module.exports = UserModel;
