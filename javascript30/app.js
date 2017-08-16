const express = require('express');
const path = require('path');

let app = express();


const port = 8080;

app.use('/static', express.static(path.join(__dirname, 'ajax-type-ahead')));


app.get('/', function(req, res, next) {
    res.render('index');
});

app.listen(port, function() {
    console.log('listening on port: ' + port);
});