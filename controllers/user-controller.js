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

UserController.getUser = (req, res) => {
  UserModel.getUser(req.params.id, (err, rows) => {
    if (err) {
      res.json({
        message: 'Error accediendo al usuario especificado',
        err
      });
    }
    if (rows.length > 0) {
      res.json({
        message: 'Busqueda de usuario exitosa',
        data: {
          id: rows[0].id,
          name: rows[0].name,
          lastname: rows[0].lastname,
          email: rows[0].email,
          rol: rows[0].rol
        }
      });
    }
  });
};

UserController.getRoles = (req, res) => {
  UserModel.getRoles((err, data) => {
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
  UserModel.getUser(req.body.email, (err, rows) => {
    if (rows.length > 0) {
      res.json({
        message: 'El usuario ya existe',
        err: 'user already exists'
      });
    } else {
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
              data: {
                id: newUser.id,
                name: newUser.name,
                lastname: newUser.lastname,
                email: newUser.email,
                rol: newUser.rol
              }
            });
          }
        });
      });
    }
  });
};

UserController.login = (req, res) => {
  UserModel.login(req.body.email, (err, rows) => {
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
            data: {
              id: rows[0].id,
              name: rows[0].name,
              lastname: rows[0].lastname,
              email: rows[0].email,
              rol: rows[0].rol
            }
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
