const connection = require('./db-connection');

const UserModel = () => {};

UserModel.getAll = callback => {
  connection.query('SELECT * FROM users', callback);
};

module.exports = UserModel;
