'use strict';

const express = require('express'),
      jade = require('jade'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      ContractModel = require('./models/contract.js'),
      MovieModel = require('./models/movie.js'),
      Web3 = require('web3')

// Mongoose connection
mongoose.connect('mongodb://localhost/rotten-potatoes');

// Express config
let app = express();
app.set('view engine', 'jade');
app.use(bodyParser());
app.use(express.static('public'));

// Routes
app.get('/', function (req, res){
  var data = {};
  ContractModel.find().sort({"createdDate": -1}).limit(1).exec(function (err, contracts){
    data = contracts[0];
    res.render('index', data);
  });
});

// Run server
app.listen(4200, function (){
  console.log("Listening on port 4200");
});