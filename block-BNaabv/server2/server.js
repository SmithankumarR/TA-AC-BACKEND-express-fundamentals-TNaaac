var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

// middleware

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.cookie('Userame', 'smithan');
    next();
});
app.use('/users/:username', (req, res, next) => {
    var username = req.params.username;
    res.send(`<h2>${username}</h2`);
    next();
});
app.use('/admin', (req, res, next) => {
    next('Unauthorized to access this page');
});

// routes

app.get('/', (req, res) => {
    res.send(`<h2> Welcome to express </h2>`);
});

app.get('/about', (req, res) => {
    res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
    res.json(req.body);
});
app.post('/json', (req, res) => {
    res.send(req.body);
});

// 404 middleware

app.use((req, res, next) => {
    res.status(404).send('Page not Found');
});

// 500 error

app.use((err, req, res, next) => {
    res.status(500).send('Server error :' + err);
});
app.listen(3000, () => {
    console.log('listening on port 3000');
});
