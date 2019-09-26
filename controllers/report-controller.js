const ReportModel = require('../models/report-model');

const ReportController = () => {};

ReportController.getAll = (req, res) => {
  ReportModel.getAll((err, data) => {
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

ReportController.addReport = (req, res) => {
  ReportModel.insert(req.body, err => {
    if (err) {
      res.json({
        message: 'Error al crear el reporte en la base de datos',
        err
      });
    } else {
      res.json({
        message: 'reporte creado con exito',
        data: req.body
      });
    }
  });
};

ReportController.userReports = (req, res) => {
  ReportModel.userReports(req.params.userId, (err, rows) => {
    if (err) {
      res.json({
        message: 'Error accediendo a los reportes del usuario',
        err
      });
    } else if (rows.length > 0) {
      res.json({
        message: 'Busqueda realizada con exito',
        data: rows
      });
    } else {
      res.json({
        message: 'El usuario no tiene reportes'
      });
    }
  });
};

ReportController.responsibleReports = (req, res) => {
  ReportModel.responsibleReports(req.params.userId, (err, rows) => {
    if (err) {
      res.json({
        message: 'Error accediendo a los reportes del usuario',
        err
      });
    } else if (rows.length > 0) {
      res.json({
        message: 'Busqueda realizada con exito',
        data: rows
      });
    } else {
      res.json({
        message: 'El usuario no tiene reportes'
      });
    }
  });
};

ReportController.update = (req, res) => {
  ReportModel.update(req.body, req.body.reportid, err => {
    if (err) {
      res.json({
        message: 'Error actualizando el reporte en la base de datos',
        err
      });
    } else {
      res.json({
        message: 'Reporte actualizado con exito',
        data: req.body
      });
    }
  });
};

module.exports = ReportController;
