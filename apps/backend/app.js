const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routers = require('./routes/index');

const app = express();

app.set('port', 3002);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routers);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(app.get('port'), () => {
  console.log(
    `Server is running at http://localhost:${app.get(
      'port'
    )}\nPress Ctrl-C to stop`
  );
});
