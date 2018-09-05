const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// GET home page
router.get('/', (req, res) => {
  res.locals.projects = projects;
  res.render('index');
});

// GET about Page
router.get('/about', (req, res) => {
  res.render('about');
});

// GET individual project page according to project id
router.get('/projects/:id', (req, res) => {
  res.locals.project = projects[req.params.id];
  res.render('project');
});

module.exports = router;