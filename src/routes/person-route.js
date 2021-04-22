'use strict';

//person-route.js
const express = require('express');

//TODO check this file path
const Person = require('../models/person.js');
const people = new Person();

const router = express.Router();

//RESTful Routes
router.get('/person', getPeople);
router.get('/person/:id', getOnePerson);
router.post('/person', createPerson);
// router.put('/person/:id', updatePerson);
// router.delete('/person/:id', deletePerson);

// // RESTful route handlers

function getPeople(req, res) {
  let getAllPeople = people.read();
  res.status(200).json(getAllPeople);
}

function getOnePerson(req, res) {
  const id = parseInt(req.params.id);
  let thePerson = people.read(id);
  res.status(200).json(thePerson);
}

function createPerson(req, res) {
  let content = req.body;
  let createdPerson = people.create(content);
  res.status(201).json(createdPerson);
}

// function updatePerson(req, res) {
//   // placeholder for now
// }

// function deletePerson(req, res) {
//   // placeholder for now
// }

module.exports = router;