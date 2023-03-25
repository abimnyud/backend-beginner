const express = require('express');
const router = require('./router/router');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
