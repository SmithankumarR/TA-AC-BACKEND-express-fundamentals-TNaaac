var express = require('express');

var app = express();

app.use('/', (req,res,next) => {
    console.log(req.method, req.url);
    next();
})

app.get('/', (req,res) => {
    res.send('Welcome');
})

app.listen(3400,()=>{
    console.log('listening on port 3400');
})