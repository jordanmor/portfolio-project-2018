const express = require('express');
const path = require('path');

const app = express();

/* The path provided to the express.static function is relative to the directory 
from where the node process is loaded. If the express app is run from another directory, 
it’s safer to use the absolute path of the directory that you want to serve */
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');

app.use(mainRoutes);

app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

app.use( (err, req, res, next) => {
  res.locals.error = err;
  console.log(`The following error has occurred: ${err.message} ${err.status}`);
  res.status(err.status).render('error');
});

app.listen(3000, () => console.log('The application is running on localhost:3000!'));