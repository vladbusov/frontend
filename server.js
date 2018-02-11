'use strict';

const http = require('http');
const fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();



app.use(express.static(path.join(__dirname, 'public')));


console.log(process.env.PORT);

app.listen(process.env.PORT || 3000);
console.log('Server started!');