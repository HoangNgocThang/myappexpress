var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
require('dotenv').config();
// const configViewEngine = require('./config/viewEngine');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const connection = require('./config/database');


const port = process.env.PORT || 8888
const hostName = process.env.HOST_NAME

var app = express();

// view engine setup
// configViewEngine(app)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// connection.execute(
//   'SELECT * FROM User',
//   function(err, results, fields) {
//     console.log(  results); // results contains rows returned by server
//     console.log( fields); // fields contains extra meta data about results, if available
//     console.log( err);
//   }
// );

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port, hostName, () => {
  console.log('vao:', port, hostName)
})




module.exports = app;
