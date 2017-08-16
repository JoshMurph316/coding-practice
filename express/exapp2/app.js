var express = require('express');

var app = express();

var port = 8000;

// setup callback..
app.listen(port, function() {
    console.log('server started, on port 8000');
});