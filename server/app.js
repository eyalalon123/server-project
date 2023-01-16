var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
let cors = require('cors')
let userManager = require('./routes/userManager')
let newFiles = require('./routes/newFile')
let readFiles = require('./routes/readFile')
let uploadFiles = require('./routes/uploadFile')


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => res.send("hi"))
 app.use("/" , userManager)
app.use('/newFile', newFiles)
app.use('/readFile', readFiles)
app.use('/upload', uploadFiles)


module.exports = app;
