const UserModel = require('../models/user-model');

const UserController = () => {};

UserController.getAll = (req, res) => {
  UserModel.getAll((err, data) => {
    if (err) {
      res.json({
        message: 'Database error unexpected',
        err
      });
    } else {
      res.json(data);
    }
  });
};

UserController.login = (req, res) => {
  UserModel.getUser(req.body.id, (err, rows) => {
    if (err) {
      res.json({
        message: 'Database error, user not exist',
        err
      });
    } else {
      res.json(rows);
    }
  });
};

module.exports = UserController;
