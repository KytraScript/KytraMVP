var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();

app.use(cors());
app.use(express.static('./public'));

app.listen(5170, function () {
    console.log('listening on port 5170!');
});