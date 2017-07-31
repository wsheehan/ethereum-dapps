const Web3 = require('web3'),
      solc = require('solc'),
      fs = require('fs'),
      mongoose = require('mongoose'),
      ContractModel = require('../api/models/contract.js')

// Mongoose connection
mongoose.connect('mongodb://localhost/rotten-potatoes');

web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
let source = fs.readFileSync('contracts/Review.sol', 'utf8');

let compiledContract = solc.compile(source, 1);
if (compiledContract.errors) throw new Error("Compilation Error: " + compiledContract.errors[0]);
let abi = compiledContract.contracts[':Review'].interface;
let bytecode = compiledContract.contracts[':Review'].bytecode;
let gasEstimate = web3.eth.estimateGas({data: bytecode});
let ReviewContract = web3.eth.contract(JSON.parse(abi));

ReviewContract.new(
  {
    from: web3.eth.accounts[0],
    data: bytecode,
    gas: gasEstimate
  }, function (err, reviewContract) {
    if(!err) {
      if(reviewContract.address) {
        console.log("Address Returned");
        ContractModel.create({
          address: reviewContract.address,
          abiDefinition: abi
        }, function (err, contract){
          if (err) { throw new Error("Could not save contract data") }
          console.log("Contract Data Saved");
          process.exit();
        })
      }
    }
  }
);