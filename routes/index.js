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
router.get('/projects/latest/:id', (req, res) => {
  res.locals.project = projects.latest.find(project => project.id === req.params.id);
  res.render('project');
});

router.get('/projects/treehouse-techdegree/:id', (req, res) => {
  res.locals.project = projects.treehouse.find(project => project.id === req.params.id);
  res.render('project');
});

module.exports = router;