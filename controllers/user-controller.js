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
  UserModel.getUser(req.body.email, (err, rows) => {
    if (err) {
      res.json({
        message: 'El usuario no existe',
        err
      });
    } else {
      if (req.body.password === rows[0].password) {
        res.json({
          message: 'Ingreso exitoso',
          data: rows[0]
        });
      } else {
        res.json({
          message: 'Contraseña o email incorrecta',
          err: 'incorrects credentials'
        });
      }
    }
  });
};

module.exports = UserController;
