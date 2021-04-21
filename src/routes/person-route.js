'use strict';

//person-route.js
const express = require('express');

//TODO check this file path
const Thing = require('../models/things.js');
const things = new Thing();

const router = express.Router();

//TODO add route for person