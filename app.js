const express = require('express');
const router = require('./routes/router');
const cors = require('cors');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(router);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.urlencoded({ extended: false }));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
