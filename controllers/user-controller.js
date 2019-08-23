const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');

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

UserController.singup = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    const newUser = {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
      rol: req.body.rol
    };

    UserModel.insert(newUser, err => {
      if (err) {
        res.json({
          message: 'Error al crear usuario en la base de datos',
          err
        });
      } else {
        res.json({
          message: 'usuario creado con exito',
          data: newUser
        });
      }
    });
  });
};

UserController.login = (req, res) => {
  UserModel.getUser(req.body.email, (err, rows) => {
    if (rows.length < 1) {
      res.json({
        message: 'El usuario no existe',
        err: 'user not exist'
      });
    } else {
      bcrypt.compare(req.body.password, rows[0].password, (error, result) => {
        if (result) {
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
      });
    }
  });
};

module.exports = UserController;
