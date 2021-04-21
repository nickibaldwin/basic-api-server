'use strict';

//404.js
module.exports = (req, res, next) => {
    res.status(404).send('not found');
}