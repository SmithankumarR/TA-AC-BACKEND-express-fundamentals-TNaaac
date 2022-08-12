var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

// middleware

app.use(express.json());
app.use(express.static(__dirname + '/public'))
app.use(logger('dev'));
app.use(cookieParser());

// routes

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/project',(req, res) => {
    res.sendFile(__dirname + '/project.html');
})
app.get('/users', (req,res) => {
    res.send('Welcome to User');
})

// error handler middleware
app.use((req,res,next) => {
res.send('Page Not Found');
next();
})

// server listening

app.listen(4000, () => {
    console.log('listening on port 4000');  
})