const connection = require('./db-connection');

const UserModel = () => {};

UserModel.getAll = callback => {
  connection.query('SELECT * FROM users', callback);
};

UserModel.getUser = (email, callback) => {
  connection.query('SELECT * FROM users WHERE email = ?', email, callback);
};

UserModel.insert = (newUser, callback) => {
  connection.query('INSERT INTO users SET ?', newUser, callback);
};

module.exports = UserModel;
