var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Contract = new Schema({
  address: String,
  abiDefinition: String,
  createdDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Contract', Contract);