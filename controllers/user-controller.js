const UserModel = require('../models/user-model');

const UserController = () => {};

UserController.getAll = (req, res) => {
  UserModel.getAll((err, data) => {
    if (err) {
      res.send('Database error unexpected.');
    } else {
      res.json(data);
    }
  });
};

module.exports = UserController;
