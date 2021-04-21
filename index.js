'use strict';

//INDEX.JS
const server = require('./src/server.js');
const dotenv = require('dotenv');
const PORT = process.send.PORT || 3000;

dotenv.config();

server.start(PORT);