'use strict';

//server.js
const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const animalRoute = require('./routes/animal-route.js');
const personRoute = require('./routes/person-route.js');

const notFound = require('./errors/404.js');
const errors = require('./errors/500.js');

const router = express.Router();


app.use(logger);
app.use(animalRoute);
app.use(personRoute);

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}