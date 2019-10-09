const connection = require('../db/db-connection');

const InvestigationModel = () => {};

InvestigationModel.reportInvestigations = (reportid, callback) => {
  connection.query(
    'SELECT * FROM investigationAdvance WHERE reportid = ?',
    reportid,
    callback
  );
};

InvestigationModel.insert = (newInvestigation, callback) => {
  connection.query(
    'INSERT INTO investigationAdvance SET ?',
    newInvestigation,
    callback
  );
};

module.exports = InvestigationModel;
