var express = require('express');
var logger = require('morgan');

var app = express();
// middleware
app.use(logger('dev'));

app.use((req, res, next) => {
    if (req.url === '/' || req.url === '/about' || req.url === '/admin') {
        next();
    } else {
        res.send('Page not found');
    }
});
app.use('/admin', (req, res, next) => {
    next('Unauthorized');
});
// routes
app.get('/', (req, res, next) => {
    res.send(`<h1> <center> Welcome to Entrance Page </center> </h2>`);
    next();
});
app.get('/about', (req, res, next) => {
    res.send(` <h2><center> Welcome to About Page </center> </h2>`);
    next();
});

// error handler

app.use((err, req, res, next) => {
    res.send(err);
});
app.listen(3000, () => {
    console.log('listening on port 3000');
});
