'use strict';

//animal-route.js
const express = require('express');

//TODO check this file path
const AnimalsModel = require('../models/animal.js');
const animals = new AnimalsModel();

const router = express.Router();

//TODO add route for person

//RESTful routes
// http://localhost:3333/things
router.get('/animal', getAnimals);
router.get('/animal/:id', getOneAnimal);
router.post('/animal', createAnimal);
router.put('/animal/:id', updateAnimal);
// router.delete('/animal/:id', deleteAnimal);

// // RESTful route handlers

function getAnimals(req, res) {
  let getAllAnimals = animals.read();
  res.status(200).json(getAllAnimals);
}

function getOneAnimal(req, res) {
  const id = parseInt(req.params.id);
  let theAnimal = animals.read(id);
  res.status(200).json(theAnimal);
}

function createAnimal(req, res) {
  let content = req.body;
  let createdAnimal = animals.create(content);
  res.status(201).json(createdAnimal);
}

function updateAnimal(req, res) {
  // placeholder for now
  let content = req.body;
  const id = parseInt(req.params.id);
  let theAnimal = animals.update(id, content);
  res.status(200).json(theAnimal);

}

function deleteAnimal(req, res) {
  // placeholder for now
  const id = parseInt(req.params.id);
  let deleteAnimal = animals.delete(id);
  res.status(201).json(deleteAnimal);
}

module.exports = router;