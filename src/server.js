/* eslint-disable no-console */
'use strict';

const app = require('./app');

const { PORT } = require('./config');

app.listen(PORT, () => {
  console.info(`Server listening at http://localhost:${PORT}`);
});