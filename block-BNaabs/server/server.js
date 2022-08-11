var express = require('express');
var logger = require('morgan');

var app = express();

// middleware
app.use(logger('dev'));

app.get('/' , (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/new', (req,res) => {
    res.sendFile(__dirname + '/new.html');
})

app.post('/new', (req,res) => {
    var store
    req.on('data',(chunk) => {
        store += chunk;
    })
    req.on('end',() => {
        res.send(store);
    });
})
app.get('/users/asdf' , (req,res) => {
    res.send(req.params.asdf);
})
app.listen(4000, () => {
    console.log('listening on port 4000');
})