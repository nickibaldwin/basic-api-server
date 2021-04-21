'use strict';

//server.js
const express = require('express');

//TODO check this file path
const Thing = require('../models/things.js');
const things = new Thing();

const router = express.Router();

//TODO add route for person
app.use(logger);
// app.use(customeRoutes);

app.use('*', notFound);
app.use(errors);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`server up: ${port}`));
    }
}