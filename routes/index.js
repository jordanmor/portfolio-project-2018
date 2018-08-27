const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
  res.locals.projects = projects;
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects/:id', (req, res) => {
  res.locals.project = projects[req.params.id];
  res.render('project');
});

module.exports = router;