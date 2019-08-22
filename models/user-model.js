const connection = require('./db-connection');

const UserModel = () => {};

UserModel.getAll = callback => {
  connection.query('SELECT * FROM users', callback);
};

UserModel.getUser = (email, callback) => {
  connection.query('SELECT * FROM users WHERE email = ?', email, callback);
}

module.exports = UserModel;
