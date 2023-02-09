const express = require('express')
var cors = require('cors');
const res = require('express/lib/response');
const req = require('express/lib/request');
var app = express()

app.use(cors());

//-- http://localhost:3000/
app.get('/', function (req, res) {
  res.send('Hello World');
});

//-- http://localhost:3000/match?a=checchua&b=belvedere/
app.get("/match", function (req, res) {
    let a;
    let b;
    a = req.query.a;
    b = req.query.b;
    var num = Math.round(Math.random() * 100);
    num = num-(-1);
    res.send(a+" match "+b+" = "+num+"%")

})

app.listen(3000);