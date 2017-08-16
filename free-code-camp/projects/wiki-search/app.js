var express = require('express');
var path = require('path');
var indexRoutes = require('./routes');
var app = express();

port = 3005;

app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRoutes);

app.listen(port, function() {
    console.log('server started on port ' + port);
});