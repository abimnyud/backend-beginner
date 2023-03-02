const express = require('express');
const router = require('./router/router');
const error = require('./middleware/error');

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);
app.use(error);

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
