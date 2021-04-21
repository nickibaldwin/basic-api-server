'use strict';

//500.js
module.exports = (err, req, res, next) => {
    res.status(500).send('something broke!');
}