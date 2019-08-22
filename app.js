const express = require('express');
const router = require('./routes/router');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors({
  origin: '*'
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
