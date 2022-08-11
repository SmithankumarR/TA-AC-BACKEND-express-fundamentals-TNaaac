var express = require('express');
var logger = require('morgan');
var cookie_parser = require('cookie-parser');

var app = express();

app.use(logger('dev'));
app.use(cookie_parser());


app.use((req, res, next) => {
    res.cookie("username", "suraj");
    res.cookie("userAdmin", "Altcampus")
    next();
})
app.use((req, res, next) => {
    console.log(req.cookies);
    next();

})
app.get('/', (req, res) => {
    res.send("Welcome to express js")
})

app.get('/about', (req, res) => {
    res.send("cookie created ")
})


app.listen(4000, () => {
    console.log('listening on port 4K');
})