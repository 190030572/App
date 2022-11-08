var express=require('express')
var mysql=require('mysql')
var bodyParser = require('body-parser');
var connection = require('./config/dbConfig')

var app=express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 1718


app.listen(port, () => {
    console.log("Hi This port is running");
});


app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
  });
  
  app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
  
  app.put('/users', (req, res) => {
    return res.send('PUT HTTP method on user resource');
  });
  
  app.delete('/users', (req, res) => {
    return res.send('DELETE HTTP method on user resource');
  });