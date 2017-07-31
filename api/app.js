'use strict';

const express = require('express'),
      jade = require('jade'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      ContractModel = require('./models/contract.js'),
      Web3 = require('web3')

// Mongoose connection
mongoose.connect('mongodb://localhost/rotten-potatoes');

// Express config
let app = express();
app.set('view engine', 'jade');
app.use(bodyParser());
app.use(express.static('public'));

// web3 connection
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
let address; let abiDefinition;
let ReviewContract; let instance;

ContractModel.find().sort({"createdDate": -1}).limit(1).exec(function (err, contracts){
  address = contracts[0].address;
  abiDefinition = JSON.parse(contracts[0].abiDefinition);
  ReviewContract = web3.eth.contract(abiDefinition);
  instance = ReviewContract.at(address);
});

// Routes
app.get('/', function (req, res){
});

app.get('/movies', function (req, res){
  // const movies = instance
  res.json({});
});

app.post('/movies', function (req, res){
  console.log(req.body);
  instance.addMovie(req.body.movies.title, req.body.movies.link, req.body.movies.image, {from: web3.eth.accounts[0]});
  res.json({});
})

// Run server
app.listen(4200, function (){
  console.log("Listening on port 4200");
});