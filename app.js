const express = require('express');
const router = require('./routes/router');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(router);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
