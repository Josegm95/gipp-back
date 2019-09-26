const connection = require('../db/db-connection');

const UserModel = () => {};

UserModel.getAll = callback => {
  connection.query(
    'SELECT id, name, lastname, email, rol FROM users',
    callback
  );
};

UserModel.getRoles = callback => {
  connection.query('SELECT * FROM roles', callback);
};

UserModel.getUser = (id, callback) => {
  connection.query('SELECT * FROM users WHERE id = ?', id, callback);
};

UserModel.login = (email, callback) => {
  connection.query('SELECT * FROM users WHERE email = ?', email, callback);
};

UserModel.insert = (newUser, callback) => {
  connection.query('INSERT INTO users SET ?', newUser, callback);
};

module.exports = UserModel;
