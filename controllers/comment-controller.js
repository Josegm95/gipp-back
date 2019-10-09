const CommentModel = require('../models/comment-model');

const CommentController = () => {};

CommentController.reportComments = (req, res) => {
  CommentModel.reportComments(req.params.reportid, (err, rows) => {
    if (err) {
      res.json({
        message: 'Error accediendo a los comentarios del reporte',
        err
      });
    } else if (rows.length > 0) {
      res.json({
        message: 'Busqueda realizada con exito',
        data: rows
      });
    } else {
      res.json({
        message: 'El reporte no tiene comentarios'
      });
    }
  });
};

CommentController.addComment = (req, res) => {
  CommentModel.insert(req.body, err => {
    if (err) {
      res.json({
        message: 'Error al crear el comentario en la base de datos',
        err
      });
    } else {
      res.json({
        message: 'comentario creado con exito',
        data: req.body
      });
    }
  });
};

module.exports = CommentController;
