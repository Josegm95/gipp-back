const mysql = require('mysql');
const config = require('./db-config');

const connection = mysql.createConnection(config);
connection.connect((err) => {
    if (err) {
        console.log(`mysql connection error: ${err.stack}`);
    } else {
        console.log('mysql connection succes');
    }
});

module.exports = connection;
