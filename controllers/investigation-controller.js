const InvestigationModel = require('../models/investigation-model');

const InvestigationController = () => {};

InvestigationController.reportInvestigations = (req, res) => {
  InvestigationModel.reportInvestigations(req.params.reportid, (err, rows) => {
    if (err) {
      res.json({
        message: 'Error accediendo a las investigaciones del reporte',
        err
      });
    } else if (rows.length > 0) {
      res.json({
        message: 'Busqueda realizada con exito',
        data: rows
      });
    } else {
      res.json({
        message: 'El reporte no tiene investigaciones'
      });
    }
  });
};

InvestigationController.addInvestigation = (req, res) => {
  InvestigationModel.insert(req.body, err => {
    if (err) {
      res.json({
        message:
          'Error al crear el avance de investigación en la base de datos',
        err
      });
    } else {
      res.json({
        message: 'avance de investigación creado con exito',
        data: req.body
      });
    }
  });
};

module.exports = InvestigationController;
