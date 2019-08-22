const express = require('express');
const router = require('./routes/router');
const cors = require('cors');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(router);
app.use(cors());
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
