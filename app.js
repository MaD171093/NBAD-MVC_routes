var express = require('express');
var router = require('./routes/router.js');
var connectionRouter = require('./routes/connectionController.js')

var app = express();



app.set('view engine', 'ejs');

app.use('/assets/stylesheets',express.static(__dirname + '/assets/stylesheets'));
app.use('/assets/images', express.static(__dirname + '/assets/images'));

app.use('/',router);
app.use('/',connectionRouter);
app.use('/index',router);
app.use('/contact',router);
app.use('/connections',connectionRouter);
app.use('/connection',connectionRouter);
app.use('/about',router);
app.use('/newConnection',router);

app.listen(8080);
