'use strict';

//logger.js
module.exports = (req, res, next) => {
    console.log('PATH:', req.path);
    next();
}