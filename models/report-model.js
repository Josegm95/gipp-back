const connection = require('../db/db-connection');

const ReportModel = () => {};

ReportModel.getAll = callback => {
  connection.query('SELECT * FROM reports', callback);
};

ReportModel.userReports = (userId, callback) => {
  connection.query('SELECT * FROM reports WHERE userId = ?', userId, callback);
};

ReportModel.responsibleReports = (userId, callback) => {
  connection.query(
    'SELECT * FROM reports WHERE responsibleid = ?',
    userId,
    callback
  );
};

ReportModel.investigatorReports = (userId, callback) => {
  connection.query(
    'SELECT * FROM reports WHERE investigatorid = ?',
    userId,
    callback
  );
};

ReportModel.update = (report, reportid, callback) => {
  connection.query(
    'UPDATE reports SET ? WHERE reportid = ?',
    [report, reportid],
    callback
  );
};

ReportModel.insert = (newReport, callback) => {
  connection.query('INSERT INTO reports SET ?', newReport, callback);
};

module.exports = ReportModel;
