var express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the ExpressJs")
})

app.listen(4000, () => {
    console.log('listening on port 4000');
})