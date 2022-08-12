var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();
// middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     res.json(res.cookie("UserName", "smithan"));
//     next();

// })
app.use('/users/:username', (req, res, next) => {
    res.send(req.params.username);
    next();
})
app.use('/admin', (req, res, next) => {
    next("Unauthorized to access this page");
})
// routes
app.get('/', (req, res, next) => {
    res.send(`<h2> Welcome to express </h2>`);
    next();
})

app.get('/about', (req, res, next) => {
    res.send('My name is qwerty');
    next();
})

app.post('/form', (req, res, next) => {
    res.json(req.body);
    next();
})
app.post('/json', (req, res, next) => {
    res.send(req.body);
    next();
})
// error handler
app.use((req, res, next) => {
    res.status(404).send('Page not Found');
    
})
// client/server error
app.use((err,req, res, next) => {
    res.status(500).send('Server error :'+ err);
})
app.listen(3000, () => {
    console.log("listening on port 3000");
})

