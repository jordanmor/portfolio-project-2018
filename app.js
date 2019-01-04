const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');

app.use(mainRoutes);

// 404 errors
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// Main error handler
app.use( (err, req, res, next) => {
  if (err.status === 404) {
    res.locals.error = err;
    res.status(err.status).render('error');
  } else {
    console.log(`The following error has occurred: ${err.message} ${err.status}`);
  }
});

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});